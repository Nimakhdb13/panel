<template>
  <div :class="$vuetify.display.mobile ? 'mt-16' : 'align-center f-h-p'" class="d-flex justify-center  f-w">
    <flipperCard />
  </div>
</template>

<script lang="ts" setup>
import flipperCard from '../components/signin/flipperCard.vue';
</script>

<style></style>
