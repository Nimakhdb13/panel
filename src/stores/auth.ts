import { defineStore } from "pinia";
import { ref } from "vue";
export const useAuthStore = defineStore("auth", () => {
  let isLoggedIn = ref(false);
  let token = ref("");
  function login(_token: string) {
    isLoggedIn.value = true;
    token.value = _token;
  }
  function $reset() {
    isLoggedIn.value = false;
    token.value = "";
  }
  return { isLoggedIn, token, login };
});
