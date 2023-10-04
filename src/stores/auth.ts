import { AuthApi } from "@/api/users/auth";
import { UserApi } from "@/api/users/user";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useAuthStore = defineStore("auth", () => {
  let isLoggedIn = ref(false);
  let token = ref("");
  let userName = ref("");
  let role = ref("");
  function login(_token: string) {
    isLoggedIn.value = true;
    token.value = _token;
  }
  function reset() {
    isLoggedIn.value = false;
    token.value = "";
  }
  function init() {
    token.value = localStorage.getItem("token") as string;
    if (token.value) {
      isLoggedIn.value = true;
      new UserApi().getProfile().then((res) => {
        userName.value = res.uesrname;
        role.value = res.role;
      });
    }
  }
  return { isLoggedIn, token, login, reset, role, userName, init };
});
