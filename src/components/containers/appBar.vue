<template>
<v-app-bar class="px-2 bg-op-0" elevation="2"> 
    <theme-toggle ></theme-toggle>
    <logout-btn></logout-btn>
</v-app-bar>
</template>

<script lang="ts" setup>
import themeToggle from '../controls/themeToggle.vue';
import logoutBtn from '../controls/logoutBtn.vue';
</script>

<style>
</style>