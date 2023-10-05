<template>
  <v-row class="mt-5 justify-center">
    <div>
      <my-table
        @action="action"
        :headers="userHeaders"
        :items="users"
        :loaded="loaded"
        :actions="actions"
      ></my-table>
    </div>
  </v-row>
</template>

<script lang="ts" setup>
import { UserApi } from "@/api/users/user";
import { ref } from "vue";
import userHeaders from "@/assets/headers/users";
import { useJalaliDate } from "@/composibles/formatDates";
import myTable from "../containers/myTable.vue";
let users = ref({} as any);
let loaded = ref(false);
let actions = [
  {
    title: "role",
    id: 0,
    type: "select",
    disabled: (user: any)=>{ return user.role == 'admin'},
    selections: ["admin", "user", "staff"],
  },
];
function action(title: string, newValue: any){
  console.log(title, newValue)
}
new UserApi().getAllUsers().then((res) => {
  users.value = res;
  loaded.value = true;
  useJalaliDate(users.value);
});
</script>

<style>
.t {
  max-width: 200px;
}
</style>
