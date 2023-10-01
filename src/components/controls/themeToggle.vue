<template>
  <v-switch
    v-model="isDark"
    inset
    inline
    hide-details
    density="compact"
    true-icon="fas fa-moon"
    false-icon="fas fa-sun"
  ></v-switch>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
let isDark = ref(false);
let theme = useTheme();
watch(isDark, (newIsDark) => {
  theme.global.name.value = newIsDark ? "myCustomDarkTheme" : "myCustomLightTheme";
})
function toggle() {
}
</script>

<style>
</style>
