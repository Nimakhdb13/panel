<template>
  <v-sheet class="mx-4 bg-op-0">
    <v-form v-model="isFormValid" @submit.prevent>
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import _rules from "../../assets/rules";
import { ref } from "vue";
let isFormValid = ref(false);
</script>

<style></style>
