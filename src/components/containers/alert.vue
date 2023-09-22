<template>
  <v-fade-transition>
    <v-alert
      density="comfortable"
      class="fix-b mb-10 w-20 centered"
      closable
      v-if="alertStore.isShowing"
      :type="(alertStore.type as any)"
      :value="false"
      elevation="10"
    >
      {{ alertStore.message }}
    </v-alert>
  </v-fade-transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAlertsStore } from "@/stores/alert";
const alertStore = useAlertsStore();
</script>

<style>

</style>
