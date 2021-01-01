<template>
  <div @click="goToChip" class="p-3 m-3 rounded-2xl text-white flex-shrink-0 text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
    {{ text.length >= 35 ? text.slice(0,35) + "..." : text }}
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
