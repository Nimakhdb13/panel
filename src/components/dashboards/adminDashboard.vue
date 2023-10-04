<template>
  <v-row class="mt-5 justify-center">
    <div>
      <v-table>
        <thead>
          <tr>
            <th
              width="200px"
              class="text-center"
              v-for="header in userHeaders"
              :key="header.value"
            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody v-if="loaded">
          <tr class="text-center" v-for="user in users" :key="user.name">
            <td class="t" v-for="key in userHeaders" :key="key.value">
              {{ user[key.value] }}
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-progress-linear indeterminate v-if="!loaded"></v-progress-linear>
    </div>
  </v-row>
</template>

<script lang="ts" setup>
import { UserApi } from "@/api/users/user";
import { ref } from "vue";
import userHeaders from "@/assets/headers/users";
import { useJalaliDate } from "@/composibles/formatDates";
let users = ref({} as any);
let loaded = ref(false);
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
