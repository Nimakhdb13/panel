<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { BaseApiService } from "./plugins/axios";
export default {
  mounted() {
    const api = new BaseApiService();
  },
};
</script>

<style></style>