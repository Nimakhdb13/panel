<template>
  <v-dialog
    persistent
    :width="$vuetify.display.mdAndUp ? '30vw' : '90vw'"
    v-model="showDialog"
  >
    <template v-slot:default="{ isActive }">
      <v-card title="New Task">
        <newTaskForm></newTaskForm>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn text="Cancel" @click="close"></v-btn>
          <v-btn
            text="Add"
            append-icon="fa-regular fa-plus"
            color="success"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import newTaskForm from "@/components/forms/newTask.vue";
import { ref } from "vue";
let showDialog = ref(false);
function show() {
  showDialog.value = true;
}
function close() {
  showDialog.value = false;
}
defineExpose({
  show,
});
</script>
