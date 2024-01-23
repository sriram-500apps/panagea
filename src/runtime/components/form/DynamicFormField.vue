<template>
  <div>
    <!-- Start of Dynamic Form Field -->
    <div v-if="field.formType === 'grouped'">
      <PGrouped :field="field" v-model="formValues[field.name]" />
    </div>
    <div v-else-if="field.formType === 'wizard'">
      <PGrouped :field="field" v-model="formValues[field.name]" />
    </div>
    <PInputField v-else v-bind="{...field}" v-model="formValues[field.name]" />
  </div>
  <!-- End of Dynamic Form Field -->
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
const emits = defineEmits(['update:modelValue'])
const { name } = props.field

watchEffect(() => {
  if (!formValues[name]) {
    // Initialize nested formValues to prevent reactivity issues
    formValues[name] = {}
  }
  formValues[name] = props.modelValue
})



watch(
    () => formValues.value,
    (newVal: any) => {
        emits('update:modelValue', newVal[name])
    },
    {deep:true}
)
</script>
