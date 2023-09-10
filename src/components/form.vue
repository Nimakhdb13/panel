<template>
  <v-card-title class="bg-orange text-center">
    {{ title }}
  </v-card-title>

  <v-sheet width="300" height="420" class="mx-auto">
    <v-form v-model="detail.isFormValid" class="mt-5" @submit.prevent>
      <v-text-field
        v-for="field in this.detail.fields"
        :key="field.title"
        variant="underlined"
        class="mx-4"
        :label="field.title"
        v-model="field.value"
        :type="field.type"
        :rules="rules[field.rules]"
      >
        <v-btn
          variant="plain"
          @click="field.type = field.type == 'password' ? 'text' : 'password'"
          v-if="field.title == 'Password'"
          class="right"
          size="small"
          icon="fas fa-eye"
        ></v-btn>
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
        :loading="this.loading"
        @click="this.submit"
        type="submit"
        block
        color="success"
        >{{ detail.btnText2 }}</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
import rules from "../assets/rules";

export default {
  props: ["title"],
  data() {
    return {
      rules: {},
      detail: {},
      cardSides: [
        {
          title: "SignUp",
          divClass: "flip-card-front",
          isFormValid: false,
          fields: [
            {
              title: "FirstName",
              value: "",
              type: "text",
              rules: "required",
            },
            {
              title: "LastName",
              value: "",
              type: "text",
              rules: "required",
            },
            {
              title: "UserName",
              value: "",
              type: "text",
              rules: "username",
            },
            {
              title: "Password",
              value: "",
              type: "password",
              rules: "password",
            },
          ],
          spanText: "do you have an account?",
          btnText1: "login",
          btnText2: "signup",
        },
        {
          title: "LogIn",
          divClass: "flip-card-back",
          isFormValid: false,
          fields: [
            {
              title: "UserName",
              value: "",
              type: "text",
              rules: "required",
            },
            {
              title: "Password",
              value: "",
              type: "password",
              rules: "required",
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
  },
  mounted() {
    this.rules = rules;
    if (this.title == "signup") this.detail = this.cardSides[0];
    else this.detail = this.cardSides[1];
  },
};
</script>

<style></style>
