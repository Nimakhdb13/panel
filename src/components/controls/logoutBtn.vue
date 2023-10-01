<template>
  <v-tooltip location="bottom" text="Logout">
    <template v-slot:activator="{ props }">
      <v-btn
        @click="logout()"
        v-bind="props"
        icon="fas fa-sign-out"
      ></v-btn>
    </template>
  </v-tooltip>
</template>
<script lang="ts" setup>
import router from "@/router";
function logout() {
  localStorage.removeItem("token");
  router.push("/");
}
</script>
