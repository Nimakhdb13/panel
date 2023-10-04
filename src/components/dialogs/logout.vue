<template>
  <v-dialog
    persistent
    :width="$vuetify.display.mdAndUp ? '30vw' : '90vw'"
    v-model="showDialog"
  >
    <template v-slot:default="{ isActive }">
      <v-card title="Logout">
        <v-card-text> Are you sure that you want to log out? </v-card-text>

        <v-card-actions class="d-flex justify-space-around">
          <v-btn text="Cancel" @click="close"></v-btn>
          <v-btn text="logout" color="error" @click="logout"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useAlertsStore } from "@/stores/alert";
import router from "@/router";
let showDialog = ref(false);
let authStore = useAuthStore();
let alertStore = useAlertsStore();
function logout() {
  alertStore.$patch({ type: "success", message: "Loged out successfully." });
  alertStore.showAlert();
  authStore.reset();
  localStorage.removeItem("token");
  close();
  router.push("/");
}
function show() {
  showDialog.value = true;
}
function close() {
  showDialog.value = false;
}
defineExpose({
  show,
});
</script>
