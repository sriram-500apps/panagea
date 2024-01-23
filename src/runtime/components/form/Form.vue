<template>
  <div>
  <!-- Start of Form -->
  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
    <!-- Start of Form Title -->
    <h2 class="text-2xl font-semibold mb-4">{{ schema.title }}</h2>
    <!-- End of Form Title -->

    <!-- Start of Form Description -->
    <p class="text-gray-600 mb-4">{{ schema.description }}</p>
    <!-- End of Form Description -->

    <!-- Start of Fields Rendering -->
    <div v-for="(field, index) in schema.fields" :key="index" class="mb-4">
      <PDynamicFormField :field="field" v-model="formValues[field.name]" />
      formValues -  {{ formValues }}
    </div>
    <!-- End of Fields Rendering -->

    <!-- Start of Submit Button -->
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Submit
    </button>
    <!-- End of Submit Button -->
  </form>
  <!-- End of Form -->
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { flattenFormFields } from '../../utils/formUtils.ts';


interface Props {
  schema?: object
}

const props = withDefaults(defineProps<Props>(), {
  schema: ()=>{}
})

// State
const formValues = ref({});

// Computed
const flattenedFields = computed(() => flattenFormFields(props.schema.fields));

// Methods
const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form values:', formValues.value);
};

// Lifecycle Hook
onMounted(() => {
  // Additional initialization logic can go here
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
