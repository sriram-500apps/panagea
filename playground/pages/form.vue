<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Dynamic Form</h1>
    <PForm :schema="sampleForm" :defaults="defaultValue" @submit="handleFormSubmit" />
  </div>
</template>

<script setup lang="ts">
import sampleForm from '~/data/user-form.json'

const handleFormSubmit = (formData) => {
  // Handle the form data (e.g., send it to the server)
  console.log('Form submitted:', formData)
}

const defaultValue = {
  permanant_address: {
    street: 'kon',
    city: 'hyd',
    state_province: 'tel',
    post_code: '500',
    country: 'india',
  },
  temporary_address: {
    street: 'kon',
    city: 'hy',
    state_province: 'tel',
    post_code: '920',
    country: 'india',
  },
  first_name: 'Sriram',
  last_name: 'P',
}
</script>
