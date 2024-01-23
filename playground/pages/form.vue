<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Dynamic Form</h1>
    <PForm :fields="formFields" @submit="handleFormSubmit" />
  </div>
</template>

<script setup lang="ts">

const formFields = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    required: true,
    placeholder: 'Enter your name',
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    required: true,
    placeholder: 'Enter your email',
  },
  {
    type: 'textarea',
    label: 'Message',
    name: 'message',
    required: true,
    placeholder: 'Enter your message',
  },
]

const handleFormSubmit = (formData) => {
  // Handle the form data (e.g., send it to the server)
  console.log('Form submitted:', formData)
}
</script>
