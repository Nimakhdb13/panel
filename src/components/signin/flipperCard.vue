<template>
  <div>
    <div class="flip-card" :class="flipClass">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <v-card
            :class="
              $vuetify.theme.name == 'myCustomLightTheme'
                ? 'bg-secondary'
                : 'bg-secondary-darken-4'
            "
            class="rounded-0 elevation-8"
          >
            <SignInForm
              @flip="flip('login')"
              title="Join us"
              :is-signup="true"
            />
          </v-card>
        </div>

        <v-card
          class="flip-card-back"
          :class="
            $vuetify.theme.name == 'myCustomLightTheme'
              ? 'bg-secondary'
              : 'bg-secondary-darken-4'
          "
        >
          <SignInForm
            @flip="flip('signup')"
            title="Welcome back"
            :is-signup="false"
          />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SignInForm from "./form.vue";
let flipClass = ref("");

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
