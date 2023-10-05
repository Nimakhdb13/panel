<template>
  <adminDashboard v-if="authStore.role == 'admin'"></adminDashboard>
  <UserDashboard v-if="authStore.role == 'user'"></UserDashboard>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import adminDashboard from "@/components/dashboards/adminDashboard.vue";
import UserDashboard from "@/components/dashboards/userDashboard.vue";
let authStore = useAuthStore();

</script>

<style></style>
