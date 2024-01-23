<!-- Example usage in a page or component -->
<template>
  <div>
    <PTable :columns="tableColumns" :rows="tableRows" />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tableColumns = ref(['Name', 'Age', 'Country'])
const tableRows = ref([
  ['John Doe', 30, 'USA'],
  ['Jane Smith', 25, 'Canada'],
  ['Bob Johnson', 40, 'UK'],
  ['Bob Johnson', 40, 'UK'],
])
</script>
