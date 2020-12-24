<template>
  {{ hours + ":" + minutes + ":" + seconds }}
</template>

<script>
import { ref } from "vue";
import { store } from "../store/store";
export default {
  name: "crono",
  setup() {
    const milliseconds = ref(0);
    const seconds = ref(0);
    const minutes = ref(0);
    const hours = ref(0);
    const streamCreatedAt = ref(0);
    setInterval(() => {
      streamCreatedAt.value = new Date(store.stream.created_at);
      milliseconds.value = Date.now() - new Date(streamCreatedAt.value);
      hours.value = Math.floor((milliseconds.value / (1000 * 60 * 60)) % 24);
      minutes.value = Math.floor((milliseconds.value / (1000 * 60)) % 60);
      seconds.value = Math.trunc((milliseconds.value / 1000) % 60);

      store.crono = Math.trunc(milliseconds.value / 1000);
    }, 1000);

    return { milliseconds, seconds, minutes, hours, store, streamCreatedAt };
  },
};
</script>

<style scoped></style>
