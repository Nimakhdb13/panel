<template>
  <v-row class="mt-5 justify-center">
    <v-table>
      <thead>
        <tr>
          <th class="text-left" v-for="header in userHeaders" :key="header.value">{{header.text}}</th>
        </tr>
      </thead>
      <tbody v-if="loaded">
        <tr v-for="user in users" :key="user.name">
          <td v-for="key in userHeaders" :key="key.value">{{ user[key.value] }}</td>
          <td>
            <v-btn min-width="0" min-height="0" icon="fa fa-trash" color="success" class="mx-2"></v-btn>
            <v-btn color="success">promote</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-row>
</template>

<script lang="ts" setup>
import { UserApi } from "@/api/users/user";
import { ref } from "vue";
import userHeaders from "@/assets/headers/users"
let users = ref({} as any);
let loaded = ref(false);
new UserApi().getAllUsers().then((res) => {
  users.value = res;
  loaded.value = true;
});
</script>

<style></style>
