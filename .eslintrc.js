module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc",
    "esling-plugin-html"
  ],
  rules: {
    "@typescript-eslint/no-extra-semi": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    "@typescript-eslint/ban-types": 0,
    "tsdoc/syntax": "warn"
  },
  ignorePatterns: ["dist.*"],
  overrides: [
    {
      files: "*.mjs",
      parser: "espree",
      env: {
        node: true,
        es6: true
      },
      parserOptions: {
        ecamaVersion: 2020,
        sourceType: "module"
      },
      plugins: [],
      extends: "eslint:recommended",
      rules: {
        "tsdoc/syntax": 0
      }
    },
    {
      files: ["**/__tests__/**.ts"],
      rules: {
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-non-null-assertion": 0
      }
    },
    {
      files: "*.vue",
      extends: [
        "plugin:vue/vue2-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "prettier"
      ],
      globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly"
      }
    }
  ]
};
