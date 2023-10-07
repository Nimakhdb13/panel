<template>
    <v-card class="blured">
        <v-card-title class="text-texts" primary-title>
            Tasks
        </v-card-title>
        <v-card-text>
            <v-btn class="mb-3" density="compact" color="success" append-icon="fa-light fa-plus">create task</v-btn>
            <myTable :loaded="true" ></myTable>
        </v-card-text>
    </v-card>    
</template>

<script lang="ts" setup>
import myTable from './myTable.vue';
import taskHeader from '@/assets/headers/tasks'
</script>

<style>

</style>
