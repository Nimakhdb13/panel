<template>
  <v-fade-transition>
    <v-alert
      density="comfortable"
      class="fix-b mb-10 centered"
      closable
      :class="$vuetify.display.mdAndUp ? ' w-20' : 'w-90'"
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
import { useAlertsStore } from "@/stores/alert";
const alertStore = useAlertsStore();
</script>

<style></style>
