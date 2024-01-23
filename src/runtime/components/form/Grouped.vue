<template>
  <div>
    <!-- Start of Form Title -->
    <h2 class="text-2xl font-semibold mb-4">{{ field.title }}</h2>
    <!-- End of Form Title -->

    <!-- Start of Form Description -->
    <p class="text-gray-600 mb-4">{{ field.description }}</p>
    <!-- End of Form Description -->

    <div
      v-for="(groupedField, index) in field.fields"
      :key="index"
      class="mb-4"
    >
      <PDynamicFormField
        :field="groupedField"
        v-model="formValues[field.name][groupedField.name]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  withDefaults,
  ref,
  defineProps,
  defineEmits,
  watchEffect,
  watch,
} from 'vue'

interface Props {
  field: object
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
})

const formValues = ref({})
const emits = defineEmits(['update:modelValue'])
const { name } = props.field

watchEffect(() => {
  if (!formValues.value[name]) {
    // Initialize nested formValues with the key of field.name
    formValues.value = { [name]: {} }
  }
  emits('update:modelValue', {})
})

watch(
  () => formValues.value,
  (newVal: any) => {
    emits('update:modelValue', newVal[name])
  },
  { deep: true }
)
</script>
