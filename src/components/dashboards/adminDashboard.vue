<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">role</th>
        <th class="text-left">email</th>
        <th class="text-left">phone</th>
        <th class="text-left">isActive</th>
        <th class="text-left">created at</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.name">
        <td>{{ item.username }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.active   }}</td>
        <td>{{ item.created_at }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
import { UserApi } from "@/api/users/user";
let users: any;
new UserApi().getAllUsers().then((res) => {
  users = res;
});
</script>

<style></style>
