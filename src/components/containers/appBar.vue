<template>
  <v-app-bar class="px-2 bg-op-0" elevation="2">
    <theme-toggle ></theme-toggle>
    <v-spacer></v-spacer>   
    <span v-if="authStore.userName" class="text-texts">hi {{ authStore.userName }}!</span>
    <logout-btn v-if="authStore.isLoggedIn"></logout-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import themeToggle from "../controls/themeToggle.vue";
import logoutBtn from "../controls/logoutBtn.vue";
import { useAuthStore } from "@/stores/auth";
let authStore = useAuthStore();
</script>

<style></style>
