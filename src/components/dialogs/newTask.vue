<template>
  <v-dialog
    persistent
    :width="$vuetify.display.mdAndUp ? '30vw' : '90vw'"
    v-model="showDialog"
  >
    <template v-slot:default="{ isActive }">
      <v-card title="New Task">
        <newTaskForm ref="newTaskFormRef"></newTaskForm>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn text="Cancel" @click="close"></v-btn>
          <v-btn
            text="Add"
            append-icon="fa-regular fa-plus"
            color="success"
            @click="add"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { TaskApi } from "@/api/tasks/task";
import newTaskForm from "@/components/forms/newTask.vue";
import { useAlertsStore } from "@/stores/alert";
import { ref } from "vue";
let alertStore = useAlertsStore();
let newTaskFormRef = ref(null);
let showDialog = ref(false);
function show() {
  showDialog.value = true;
}
function close() {
  showDialog.value = false;
}
function add(){
  if(newTaskFormRef.value)
  new TaskApi().createTask((newTaskFormRef.value as any).newTask).then((res)=>{
    alertStore.$patch({
      message: res.message,
      type:"success"    
    })
    alertStore.showAlert(); 
    close();
  })
}
defineExpose({
  show,
});
</script>
