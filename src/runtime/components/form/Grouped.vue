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
        v-model="formValues[field.name]"
        :field="groupedField"
      />
    </div>
    <!-- formValues -  {{ formValues }} -->
  </div>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  field: object
  modelValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
})

const formValues = ref({})

const inputValue = ref(null)
const emits = defineEmits(['update:modelValue'])

watch(
  () => formValues.value,
  (newVal: any) => {
    emits('update:modelValue', newVal)
  },
  { deep: true }
)
</script>
