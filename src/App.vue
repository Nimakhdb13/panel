<template>
  <div :class="$vuetify.theme.global.name == 'myCustomLightTheme' ? 'index-container-light' : 'index-container-dark'" >
    <theme-toggle></theme-toggle>
    <template class="d-flex justify-center">
      <router-view></router-view>
      <alert />
    </template>
  </div>
</template>

<script lang="ts" setup>
import alert from './components/containers/alert.vue';
import themeToggle from './components/controls/themeToggle.vue';
</script>

<style>
.index-container-light{
  height:100vh;
  background: linear-gradient(110deg, rgb(var(--v-theme-back-1)) 0%, rgb(var(--v-theme-back-3)) 49%, rgb(var(--v-theme-back-1)) 100%);   
}
.index-container-dark{
  height:100vh  ;
  background: linear-gradient(110deg, rgb(var(--v-theme-back-1)) 0%, rgb(var(--v-theme-back-2)) 49%, rgb(var(--v-theme-back-3)) 100%); 
}
</style>