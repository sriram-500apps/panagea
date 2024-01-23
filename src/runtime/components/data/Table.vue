<!-- Table.vue -->
<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <!-- Table headers -->
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <!-- Table rows -->
          <td v-for="(value, colIndex) in row" :key="colIndex">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// Define component props
const { columns, rows } = defineProps(['columns', 'rows'])
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>
