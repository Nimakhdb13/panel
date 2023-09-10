<template>
  <div class="d-flex align-center justify-center f-h-p f-w">
    <div class="flip-card" :class="this.class">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <v-card>
            <Forme @flip="flip('login')" title="signup" />
          </v-card>
        </div>

        <v-card class="flip-card-back">
          <Forme @flip="flip('signup')" title="login" />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Forme from "./components/form.vue";
export default {
  components: { Forme },
  data() {
    return {
      class: "",
    };
  },
  methods: {
    flip(mode) {
      if (mode === "signup") {
        this.class = "flip-card-first";
        setTimeout(() => {
          this.class = "";
        }, 800);
      } else {
        this.class = "flip-card-flipped-first";
        setTimeout(() => {
          this.class = "flip-card-flipped";
        }, 800);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
.flip-card {
  perspective: 1000px;
}

.flip-card-first .flip-card-inner {
  transform: rotateY(-20deg);
}

.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-flipped-first .flip-card-inner {
  transform: rotateY(200deg);
}

.flip-card-flipped .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  display: none;
}
</style>
