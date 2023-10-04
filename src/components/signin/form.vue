<template>
  <v-card-title class="text-primary-lighten-2 text-center">
    {{ title }}
  </v-card-title>

  <v-sheet width="300" height="400" class="mx-auto bg-op-0">
    <v-form v-model="detail.isFormValid" class="mt-5" @submit.prevent>
      <v-text-field
        v-for="field in detail.fields"
        :key="field.title"
        variant="outlined"
        class="mx-4 py-1 rounded-lg text-texts"
        density="compact"
        clearable
        base-color="primary-lighten-3"
        color="primary-lighten-2"
        :prepend-inner-icon="field.icon"
        :append-inner-icon="
          field.title == 'Password'
            ? field.type == 'text'
              ? 'fa-regular fa-eye-slash fa-xl'
              : 'fa-regular fa-eye'
            : ''
        "
        @click:append-inner="
          field.type = field.type == 'password' ? 'text' : 'password'
        "
        :label="field.title"
        v-model="formData[(field.name as keyof typeof formData)]"
        :type="field.type"
        @keydown="checkPhoneIsNumber"
        :rules="_rules[field.name as keyof typeof _rules]"
      >
      </v-text-field>
      <div class="d-flex align-center justify-center">
        <span class="text-caption mr-3 text-texts">{{ detail.spanText }}</span>
        <v-btn
          @click="$emit('flip')"
          variant="text"
          class="px-0"
          color="primary-lighten-3"
          >{{ detail.btnText1 }}</v-btn
        >
      </div>
      <v-btn
        class="fix-b rounded-0"
        :loading="loading"
        @click="submit(detail.title)"
        type="submit"
        block
        color="primary-lighten-2"
        >{{ detail.btnText2 }}</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import _rules from "../../assets/rules";
import { AuthApi } from "../../api/users/auth";
import cardSides from "@/assets/signinCardDetails";
import router from "@/router";
import { useAlertsStore } from "@/stores/alert";
import { useAuthStore } from "@/stores/auth";
const emits = defineEmits(["flip"]);

const props = defineProps({
  title: String,
  isSignup: Boolean,
});
let detail = ref({}) as any;
let formData = ref({
  username: "",
  password: "",
  email: "",
  phone: "",
});
let alertStore = useAlertsStore();
let authStore = useAuthStore();

let loading = ref(false);

function submit(type: string) {
  if (detail.value.isFormValid) {
    loading.value = true;
    if (type == "SignUp")
      new AuthApi()
        .signup(formData.value)
        .then((res) => {
          loading.value = false;
          alertStore.$patch({
            type: "success",
            message: "Signed Up successfully.",
          });
          alertStore.showAlert();
          emits("flip");
        })
        .catch(() => (loading.value = false));
    else
      new AuthApi()
        .login(loginFormData(formData.value))
        .then((res) => {
          loading.value = false;
          alertStore.$patch({
            type: "success",
            message: "Loged in successfully.",
          });
          alertStore.showAlert();
          authStore.login(res.access_token);
          localStorage.setItem("token", res.access_token);
          router.push("/dashboard");
        })
        .catch(() => (loading.value = false));
  }
}

function loginFormData(formData: any) {
  return {
    username: formData.username,
    password: formData.password,
  };
}

function checkPhoneIsNumber(event: any) {
  if (event.target.type == "tel") {
    var charCode = event.which ? event.which : event.keyCode;
    if (
      charCode > 31 &&
      (charCode < 48 || charCode > 57) &&
      charCode !== 46 &&
      !(charCode < 106 && charCode > 95)
    ) {
      event.preventDefault();
    } else {
      return true;
    }
  }
}

onMounted(() => {
  if (props.isSignup) detail.value = cardSides[0];
  else detail.value = cardSides[1];
});
</script>

<style>
.v-icon--size-default {
  font-size: 20px !important;
}

.v-messages {
  font-size: 14px !important;
}

.v-messages__message {
  line-height: 14px !important;
}
</style>
