<template>
  <v-btn @click="logout()" color="success">logout</v-btn>
</template>

<script lang="ts" setup>
import router from "@/router";
function logout() {
  localStorage.removeItem("token");
  router.push("/");
}
</script>

<style></style>
