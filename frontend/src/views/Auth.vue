<template>
  <div v-if="store.stream.created_at">
    <h1>DATA LOADED</h1>
  </div>
  <div v-else>
    Loading
  </div>
</template>

<script>
import { store } from "@/store/store";
export default {
  components: {},
  setup() {
    store.doLogin();
    store.getStream();
    return { store };
  },
};
</script>
