import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  installModule,
} from '@nuxt/kit'
import { defaultExtractor as createDefaultExtractor } from 'tailwindcss/lib/lib/defaultExtractor.js'

const defaultExtractor = createDefaultExtractor({
  tailwindConfig: { separator: ':' },
})

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'p'
   */
  prefix: string
  /**
   * @default false
   */
  global?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'P',
  },
  async setup(options, nuxt) {
    // @ts-ignore
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))

    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkmode: 'class',
        plugins: [require('@tailwindcss/forms')({ stratergy: 'class' })],
        content: {
          files: [resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}')],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            },
          },
          extract: {
            vue: (content) => {
              return [...defaultExtractor(content)]
            },
          },
        },
      },
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'data'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components', 'form'),
      prefix: options.prefix,
      global: options.global,
      watch: false,
    })
  },
})
