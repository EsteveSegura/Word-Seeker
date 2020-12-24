<template>
  <Hero />
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  name: "Home",
  components: {
    Hero,
  },
  setup(){
    console.log("Algo")
  },
};
</script>
