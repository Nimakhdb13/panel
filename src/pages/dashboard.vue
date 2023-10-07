<template>
  <superAdminDashboard v-if="authStore.role == 'super_admin'"></superAdminDashboard>
  <UserDashboard v-if="authStore.role == 'user'"></UserDashboard>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import superAdminDashboard from "@/components/dashboards/superAdminDashboard.vue";
import UserDashboard from "@/components/dashboards/userDashboard.vue";
let authStore = useAuthStore();

</script>

<style></style>
