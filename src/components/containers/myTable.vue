<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-center" v-for="header in headers" :key="header.value">
          {{ header.text }}
        </th>
        <th class="text-center" v-for="action in actions" :key="action.id">
          {{ action.title }}
        </th>
      </tr>
    </thead>
    <tbody v-if="loaded">
      <tr class="text-center" v-for="item in items" :key="item.name">
        <td v-for="key in headers" :key="key.value">
          {{ item[key.value] }}
        </td>
        <td class="d-flex align-center">
          <div v-for="action in actions" :key="action.id">
            <v-select
              v-if="action.type == 'select'"
              density="compact"
              :items="action.selections"
              v-model="item[action.title]"
              hide-details
              :disabled="action.disabled(item)"
              @update:modelValue="
                $emit('action', action.title, item[action.title])
              "
            ></v-select>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-progress-linear indeterminate v-if="!loaded"></v-progress-linear>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  headers?: any;
  items?: any;
  loaded?: boolean;
  actions?: any;
}>();
</script>

<style></style>
