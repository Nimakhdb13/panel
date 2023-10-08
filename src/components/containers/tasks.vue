<template>
    <v-card class="blured">
        <v-card-title class="text-texts text-h4 py-4" primary-title>
            Tasks
        </v-card-title>
        <v-card-text>
            <v-btn class="mb-3" density="compact" color="success" append-icon="fa-light fa-plus" @click="openNewTaskDialog">create task</v-btn>
            <myTable :loaded="true" :headers="taskHeader"></myTable>
        </v-card-text>
    </v-card>    
    <newTask ref="newTaskDialogRef"></newTask>
</template>

<script lang="ts" setup>
import myTable from './myTable.vue';
import newTask from '../dialogs/newTask.vue';
import taskHeader from '@/assets/headers/tasks'
import { ref } from 'vue';
let newTaskDialogRef = ref(null);

function openNewTaskDialog() {
    console.log(newTaskDialogRef)
  if (newTaskDialogRef.value) (newTaskDialogRef.value as any).show();
}
</script>

<style>

</style>
