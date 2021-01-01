<template>
  <div @click="goToChip"
       class="p-3 m-3 rounded-2xl text-white text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
    {{offset}}
    {{ expand ? text.split(" ").map(t => t == searchTerm ? `**${t}**` : t).join(" ") : text.length >= 35 ? text.slice(0,35) + "..." : text }}
  </div>
</template>

<script>
import {store} from "@/store/store";
import {ref} from 'vue';

export default {
  props: {
    text: String,
    offset: Number,
    timeStamp: Number,
    expand: Boolean,
    searchTerm: String,
  },
  setup(props) {
    const innerText = ref("123")

    function goToChip() {
      store.player.seek(props.timeStamp + store.offset);
    }

    return {store, goToChip, innerText};
  },

};
</script>

<style></style>
