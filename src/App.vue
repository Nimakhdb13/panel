<template>
  <v-app>
    <div
      class="f-h"
      :class="
        $vuetify.theme.global.name == 'myCustomLightTheme'
          ? 'index-container-light'
          : 'index-container-dark'
      "
    >
        <appBar class="app-bar"></appBar>
        <router-view></router-view>
        <alert />
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import alert from "./components/containers/alert.vue";
import appBar from "./components/containers/appBar.vue";
</script>

<style>
.index-container-light {
  background: linear-gradient(
    110deg,
    rgb(var(--v-theme-back-1)) 0%,
    rgb(var(--v-theme-back-3)) 49%,
    rgb(var(--v-theme-back-1)) 100%
  );
}
.index-container-dark {
  background: linear-gradient(
    110deg,
    rgb(var(--v-theme-back-1)) 0%,
    rgb(var(--v-theme-back-2)) 49%,
    rgb(var(--v-theme-back-3)) 100%
  );
}
.app-bar{
  position: sticky !important;
  top: 0;
}
</style>
