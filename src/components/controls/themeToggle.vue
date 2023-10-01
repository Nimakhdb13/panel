<template>
  <v-tooltip location="bottom" :text="isDark ? 'Dark Theme' : 'Light Theme'">
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <v-switch
          v-model="isDark"
          inset
          hide-details
          density="compact"
          true-icon="fas fa-moon"
          false-icon="fas fa-sun"
        ></v-switch>
      </div>
    </template>
  </v-tooltip>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
let isDark = ref(false);
let theme = useTheme();
watch(isDark, (newIsDark) => {
  theme.global.name.value = newIsDark
    ? "myCustomDarkTheme"
    : "myCustomLightTheme";
});
</script>

<style>

</style>
