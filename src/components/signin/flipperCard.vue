<template>
  <div>
    <div class="flip-card" :class="flipClass">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <v-card class="bg-blue-lighte-5 elevation-8">
            <SignInForm
              @submit="(res) => submited(res, true)"
              @flip="flip('login')"
              title="signup"
            />
          </v-card>
        </div>

        <v-card class="flip-card-back">
          <SignInForm
            @submit="(res) => submited(res, false)"
            @flip="flip('signup')"
            title="login"
          />
        </v-card>
      </div>
    </div>
  </div>
  <v-fade-transition>
    <v-alert
      density="comfortable"
      class="fix-b mb-10 w-20"
      closable
      v-if="showAlert"
      :type="(response.type as any)"
      :value="false"
      elevation="10"
    >
      {{ response.text }}
    </v-alert>
  </v-fade-transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SignInForm from "./form.vue";
import router from "@/router";
let showAlert = ref(false);
let response = ref({ type: "", text: "" });
let flipClass = ref("");
function submited(res: any, isSignup: boolean) {
  response.value = {
    type: res.success ? "success" : "error",
    text: res.success
      ? `${isSignup ? "signed up" : "logged in"} successfully.`
      : res.message,
  };
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
    if (!isSignup && res.success) router.push("/dashboard");
  }, isSignup ? 2000 : 900);
}
function flip(mode: string) {
  flipClass.value =
    mode == "signup" ? "flip-card-first" : "flip-card-flipped-first";
  setTimeout(() => {
    flipClass.value = mode == "signup" ? "" : "flip-card-flipped";
  }, 800);
}
</script>

<style>
.flip-card {
  perspective: 800px;
}

.flip-card-first .flip-card-inner {
  transform: rotateY(-20deg);
}

.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card-flipped-first .flip-card-inner {
  transform: rotateY(200deg);
}

.flip-card-flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
  display: none;
}
</style>
