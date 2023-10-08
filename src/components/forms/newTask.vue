<template>
  <v-sheet class="mx-4 bg-op-0">
    <v-form @submit.prevent>
      <template v-for="field in newTaskFields" :key="field.title">
        <v-text-field
          v-if="field.element == 'textField'"
          v-model="newTask[(field.vModel as keyof typeof newTask)]"
          :label="field.title"
          :prepend-inner-icon="field.icon"
        ></v-text-field>
        <v-select
          v-if="field.element == 'select'"
          :items="(field.acceptedValues as any)"
          v-model="newTask[(field.vModel as keyof typeof newTask)]"
          :prepend-inner-icon="field.icon"
          :label="field.title"
        ></v-select>
        <v-textarea
          v-if="field.element == 'textArea'"
          v-model="newTask[(field.vModel as keyof typeof newTask)]"
          :prepend-inner-icon="field.icon"
          :label="field.title"
        ></v-textarea>
      </template>
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import _rules from "../../assets/rules";
import { ref } from "vue";
import newTaskFields from "@/assets/fields/newTask";
import { type CreateTask } from "@/models/createTask";
let users = ref(["nima", "zahraafzali"]);
let newTask = ref({
  title: "",
  assignee: "",
  deadline: "2023-10-17T23:59:59",
  status: "backlog",
  priority: "medium",
  description: "",
} as CreateTask);
newTaskFields[1].acceptedValues = users.value;
defineExpose({
  newTask,
});
</script>

<style></style>
