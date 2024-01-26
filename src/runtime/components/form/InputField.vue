<template>
  <div :class="[containerClass, $attrs.class]">
    <!-- Start of Input Field -->
    <label :for="id" :class="labelClass"
      >{{ label
      }}<span v-if="isOptional" :class="optionalClass"> (Optional)</span></label
    >
    <div class="relative">
      <div class="flex items-center">
        <slot name="icon-left" />
        <!-- Input Element -->
        <input
          v-if="isTextInput"
          v-model="inputValue"
          :type="type"
          :name="name"
          :id="id"
          :class="inputClass"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :aria-invalid="hasError"
          :aria-describedby="hasError ? errorId : null"
          @input="onInput"
          @blur="onInput"
        />
        <textarea
          v-else-if="type === 'textarea'"
          v-model="inputValue"
          :name="name"
          :id="id"
          :class="inputClass"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :aria-invalid="hasError"
          :aria-describedby="hasError ? errorId : null"
          @input="$emit('input', $event.target.value)"
          @blur="$emit('blur', $event)"
        ></textarea>
        <select
          v-else-if="type === 'select'"
          :name="name"
          :id="id"
          :class="inputClass"
          :disabled="disabled"
          :value="value"
          :required="required"
          :aria-invalid="hasError"
          :aria-describedby="hasError ? errorId : null"
          @change="$emit('change', $event.target.value)"
          @blur="$emit('blur', $event)"
        >
          <slot></slot>
        </select>
        <div v-else>
          {{ type }}
          No field
        </div>
        <!-- End of Input Element -->
        <slot name="icon-right" />
      </div>
    </div>
    <!-- End of Input Field -->

    <!-- Help Text/Error Message -->
    <div v-if="hasError" :id="errorId" :class="errorClass">
      {{ errorMessage || helpText }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface InputFieldProps {
  id?: string
  label: string
  type: 'text' | 'number' | 'email' | 'textarea' | 'select' | 'tel' | 'file' | 'password'
  name: string
  placeholder?: string
  disabled?: boolean
  value?: string | number
  helpText?: string
  errorMessage?: string
  optional?: boolean
  modelValue?: any
  required?: boolean
}

const props = withDefaults(defineProps<InputFieldProps>(), {
  placeholder: '',
  disabled: false,
  value: '',
  helpText: '',
  errorMessage: '',
  optional: false,
  modelValue: null,
  required: false
})

const inputValue = ref(props.modelValue)

const emits = defineEmits(['update:modelValue'])

const errorId = `error-${props.id || generateRandomId()}`
const labelClass = 'block text-sm font-medium leading-6 text-gray-900'
const optionalClass = 'text-sm leading-6 text-gray-500'
const containerClass = 'mt-2 relative'
const inputClass =
  'block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
const errorClass = 'mt-2 text-sm text-red-600'

const hasError = props.errorMessage || props.helpText
const isOptional = props.optional
const isTextInput = ['text', 'number', 'email','file', 'password', 'tel'].includes(props.type)

function generateRandomId() {
  // Simple random ID generator for demonstration purposes
  return `input-${Math.random().toString(36).substring(7)}`
}

const onInput = (event) => {
  inputValue.value = event.target.value;
  emits('update:modelValue', event.target.value)
}
</script>
