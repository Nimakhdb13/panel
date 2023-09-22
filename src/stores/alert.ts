import { defineStore } from "pinia";
import { ref } from "vue";
export const useAlertsStore = defineStore("alerts", () => {
  let isShowing = ref(false);
  let message = ref("");
  let type = ref("");
  let showTime = ref(1000);
  function showAlert() {
    isShowing.value = true;
    setTimeout(
      () => {
        isShowing.value = false;
      },
      showTime.value
    );
  }
  function $reset() {
    isShowing.value = false;
    message.value = "";
    type.value = "";
  }
  return { showAlert, isShowing, message, type, showTime };
});
