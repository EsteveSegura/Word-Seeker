<template>
  <div @click="goToChip" class="bg-red-800 p-3 m-3 rounded-2xl text-white" >
    {{ text }}
  </div>
</template>

<script>
import { store } from "@/store/store";
export default {
  props: {
    text: String,
    timeStamp: Number,
  },
  setup(props) {
    function goToChip() {
      store.player.seek(props.timeStamp);
    }

    return { store, goToChip };
  },
};
</script>

<style></style>
