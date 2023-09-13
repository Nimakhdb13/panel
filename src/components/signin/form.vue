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
        v-model="field.value"
        :type="field.type"
        @keydown="checkPhoneIsNumber"
        :rules="rules[field.rules]"
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
        @click="submit"
        type="submit"
        block
        color="success"
        >{{ detail.btnText2 }}</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import rules from "../../assets/rules";

export default {
  props: ["title"],
  emits: ["flip"],
  data() {
    return {
      rules: {} as any,
      detail: {} as any,
      cardSides: [
        {
          title: "SignUp",
          isFormValid: false,
          fields: [
            {
              title: "UserName",
              value: "",
              type: "text",
              rules: "username",
              icon: "fa-solid fa-user",
            },
            {
              title: "Email",
              value: "",
              type: "text",
              rules: "email",
              icon: "fa-solid fa-envelope",
            },
            {
              title: "Phone Number",
              value: "",
              type: "tel",
              rules: "phone",
              icon: "fa-solid fa-phone",
            },
            {
              title: "Password",
              value: "",
              type: "password",
              rules: "password",
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
              value: "",
              type: "text",
              rules: "required",
              icon: "fa-solid fa-user",
            },
            {
              title: "Password",
              value: "",
              type: "password",
              rules: "required",
              icon: "fa-solid fa-key",
            },
          ],
          spanText: "don't you have an account?",
          btnText1: "signup",
          btnText2: "login",
        },
      ],
      loading: false,
    };
  },

  methods: {
    submit() {
      if (this.detail.isFormValid) {
        this.loading = true;
        for (let item of this.detail.fields) console.log(item.value);
      }
    },
    checkPhoneIsNumber(event: any) {
      if (event.target.type == "tel") {
        var charCode = event.which ? event.which : event.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          event.preventDefault();
        } else {
          return true;
        }
      }
    },
  },
  mounted() {
    this.rules = rules;
    if (this.title == "signup") this.detail = this.cardSides[0];
    else this.detail = this.cardSides[1];
  },
};
</script>

<style>
.v-icon--size-default {
  font-size: 20px !important;
}
</style>
