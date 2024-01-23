<template>
  <!-- Start of Dynamic Form Field -->
  <div>
    <!-- Use field.type to dynamically render different input types -->
    <div v-if="field.formType === 'grouped'" class="">
      <PGrouped :field="field" v-model="formValues[field.name]"></PGrouped>
    </div>
    <div v-else-if="field.formType === 'wizard'">
        <PGrouped :field="field" v-model="formValues[field.name]"></PGrouped>
    </div>
    <PInputField v-else v-bind="field" v-model="formValues[field.name]"> </PInputField>
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

const inputValue = ref(null)
const formValues = ref({})
const emits = defineEmits(['update:modelValue'])

watch(
    () => formValues.value,
    (newVal: any) => {
        emits('update:modelValue', newVal)
    },
    {deep:true}
)
</script>
