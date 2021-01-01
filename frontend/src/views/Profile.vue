<template>
  <div v-if="!store.stream" class="m-auto" >
    STREAM NOT STARTED
  </div>
  <div v-else class="m-auto">
    <StreamC />
  </div>
  
</template>

<script>
import StreamC from "@/components/StreamC.vue";
import { store } from "../store/store";
export default {
  components: {
    StreamC,
  },
  setup() {
    return { store };
  },
};
</script>
