<template>
  <v-table class="blured rounded-lg">
    <thead>
      <tr>
        <th class="text-center text-texts" v-for="header in headers" :key="header.value">
          {{ header.text }}
        </th>
        <th class="text-center text-texts" v-for="action in actions" :key="action.id">
          {{ action.title }}
        </th>
      </tr>
    </thead>
    <tbody v-if="loaded">
      <tr class="text-center text-texts" v-for="item in items" :key="item.name">
        <td v-for="key in headers" :key="key.value">
          {{ item[key.value] }}
        </td>
        <td class="d-flex align-center text-texts">
          <div v-for="action in actions" :key="action.id">
            <v-select
              v-if="action.type == 'select'"
              density="compact"
              :items="action.selections"
              variant="outlined" 
              v-model="item[action.title]"
              hide-details
              base-color="texts"
              color="secondary-darken-1"
              :disabled="action.disabled(item)"
              @update:modelValue="
                $emit('action', action.title, item[action.identifier], item[action.title])
              "
            ></v-select>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-progress-linear class="blured" indeterminate v-if="!loaded"></v-progress-linear>
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

<style>
.blured {
  background: rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(5px) !important;
  -webkit-backdrop-filter: blur(5px) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
}

</style>
