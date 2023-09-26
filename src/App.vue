<template>
  <theme-toggle></theme-toggle>
  <template class="d-flex justify-center">
    <router-view></router-view>
    <alert />
  </template>
</template>

<script lang="ts" setup>
import alert from './components/containers/alert.vue';
import themeToggle from './components/controls/themeToggle.vue';
</script>

<style>

</style>