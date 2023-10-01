<template>
  <v-tooltip location="bottom" text="Logout">
    <template v-slot:activator="{ props }">
      <v-btn
        @click="openLogutDialog"
        v-bind="props"
        icon="fas fa-sign-out"
      ></v-btn>
    </template>
  </v-tooltip>
  <logout-dialog ref="logoutDialogRef"></logout-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import logoutDialog from "@/components/dialogs/logout.vue";

let logoutDialogRef = ref(null);

function openLogutDialog() {
  if (logoutDialogRef.value) (logoutDialogRef.value as any).show();
}
</script>
