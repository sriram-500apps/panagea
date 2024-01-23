<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Dynamic Form</h1>
    <PForm :schema="sampleForm" @submit="handleFormSubmit" />
  </div>
</template>

<script setup lang="ts">
import sampleForm from "~/data/sample-form.json"

const handleFormSubmit = (formData) => {
  // Handle the form data (e.g., send it to the server)
  console.log('Form submitted:', formData)
}
</script>
