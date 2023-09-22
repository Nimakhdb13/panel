<template>
  <template class="d-flex justify-center">
    <router-view></router-view>
    <alert />
  </template>
</template>

<script lang="ts" setup>
import alert from './components/containers/alert.vue';
</script>

<style>

</style>