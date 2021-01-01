<template>

  <section class="text-gray-400 body-font bg-gray-900">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{{streamData.data.owner}}</h1>
        <div id="player"></div>
      </div>
      <div class="flex flex-wrap -m-4 justify-center">
        {{searchTerm}}
        <input type="text" placeholder="Search..." v-model="searchTerm" v-on:keyup="search" id="full-name" name="full-name" class="mb-5 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <div class="flex flex-wrap justify-center">
          <TextChip
              v-for="(chip, index) in streamCopy"
              :key="index"
              :text="chip.text"
              :timeStamp="chip.timeStamp"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as Twitch from "../libs/twitch.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {store} from "@/store/store";
import TextChip from "@/components/TextChip";
import axios from "axios";

export default {
  components: {
    TextChip,
  },
  async setup() {
    const router = useRouter();
    const transcript = ref({});
    const searchTerm = ref("");
    const streamCopy = ref({});
    const streamData = ref({})

    streamData.value = await axios.get(
        `http://localhost:3001/streams/getstream/${router.currentRoute._rawValue.params.idvideo}`
    );

    transcript.value = streamData.value.data.transcription;
    streamCopy.value = streamData.value.data.transcription;

    function search() {
      if (searchTerm.value == "") streamCopy.value = transcript.value;
      if (searchTerm.value != "")
        streamCopy.value = transcript.value.filter((el) =>
            el.text.includes(searchTerm.value)
        );
    }

    return {router, store, transcript, search, searchTerm, streamCopy, streamData};
  },
  mounted() {
    let options = {
      width: 400,
      height: 200,
      video: this.$route.params.idvideo,
    };
    this.store.player = new Twitch.Player("player", options);
    this.store.player.setVolume(0.5);
  },
};
</script>
