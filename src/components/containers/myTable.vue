<template>
  <v-table>
    <thead>
      <tr>
        <th
          width="200px"
          class="text-center"
          v-for="header in headers"
          :key="header.value"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody v-if="loaded">
      <tr class="text-center" v-for="item in items" :key="item.name">
        <td class="t" v-for="key in headers" :key="key.value">
          {{ item[key.value] }}
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-progress-linear indeterminate v-if="!loaded"></v-progress-linear>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  headers?: any
  items?: any
  loaded?: boolean
}>()
</script>

<style></style>
