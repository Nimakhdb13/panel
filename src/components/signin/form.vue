<template>
  <v-card-title class="bg-orange text-center">
    {{ title }}
  </v-card-title>

  <v-sheet width="300" height="400" class="mx-auto bg-op-0">
    <v-form v-model="detail.isFormValid" class="mt-5" @submit.prevent>
      <v-text-field
        v-for="field in detail.fields"
        :key="field.title"
        variant="outlined"
        class="mx-4 my-3"
        density="compact"
        color="green"
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
        v-model="formData[field.name]"
        :type="field.type"
        @keydown="checkPhoneIsNumber"
        :rules="rules[field.name]"
      >
      </v-text-field>
      <div class="d-flex align-center justify-center">
        <span class="text-caption mr-3">{{ detail.spanText }}</span>
        <v-btn
          @click="$emit('flip')"
          variant="text"
          class="px-0"
          color="orange"
          >{{ detail.btnText1 }}</v-btn
        >
      </div>
      <v-btn
        class="fix-b"
        :loading="loading"
        @click="submit(detail.title)"
        type="submit"
        block
        color="success"
        >{{ detail.btnText2 }}</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed} from "vue";
import _rules from "../../assets/rules";
import { AuthApi } from "../../api/users/auth";
import axios from "axios";
const props = defineProps({
  title: String,
});
let rules = ref(_rules) as any;
let detail = ref({}) as any;
let formData = ref({
  username:'',
  password:'',
  email:'',
  phone:''
})
let cardSides = [
  {
    title: "SignUp",
    isFormValid: false,
    fields: [
      {
        title: "UserName",
        type: "text",
        rule: "username",
        icon: "fa-solid fa-user",
      },
      {
        title: "Email",
        type: "text",
        rule: "email",
        icon: "fa-solid fa-envelope",
      },
      {
        title: "Phone Number",
        type: "tel",
        rule: "phone",
        icon: "fa-solid fa-phone",
      },
      {
        title: "Password",
        type: "password",
        rule: "password",
        icon: "fa-solid fa-key",
      },
    ],
    spanText: "do you have an account?",
    btnText1: "login",
    btnText2: "signup",
  },
  {
    title: "LogIn",
    isFormValid: false,
    fields: [
      {
        title: "UserName",
        name: 'username',
        type: "text",
        rule: "required",
        icon: "fa-solid fa-user",
      },
      {
        title: "Password",
        name: 'password',
        type: "password",
        rule: "required",
        icon: "fa-solid fa-key",
      },
    ],
    spanText: "don't you have an account?",
    btnText1: "signup",
    btnText2: "login",
  },
];
let loading = ref(false);

function submit(type: string) {
  if (detail.value.isFormValid) {
    loading.value = true;
    if(type == "SignUp")
      new AuthApi().signup(formData.value).then((res)=>{
        console.log(res)
      })
    else
      new AuthApi().login(loginFormData(formData.value)).then((res)=>{
          console.log(res)
        })
      }
}

function loginFormData(formData: any){
  console.log(formData)
  return {
    username: formData.username,
    password: formData.password,
  }
}

function checkPhoneIsNumber(event: any) {
  if (event.target.type == "tel") {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      event.preventDefault();
    } else {
      return true;
    }
  }
}

onMounted(() => {
  if (props.title == "signup") detail.value = cardSides[0];
  else detail.value = cardSides[1];
});
</script>

<style>
.v-icon--size-default {
  font-size: 20px !important;
}
</style>
