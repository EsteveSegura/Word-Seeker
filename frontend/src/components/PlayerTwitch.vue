<template>
  <section class="text-gray-700 body-font m-auto overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-12 mx-2">
        <div class="p-12 md:w-1/2 flex flex-col items-start">
          <h2>Holas</h2>
          <div id="player"></div>
        </div>
        <div class="p-12 md:w-1/2 flex flex-col items-start">
          <h2>Holas</h2>
          <input type="text" v-model="searchTerm" v-on:keyup="search" />
          <div class="container">
            <TextChip
              v-for="(chip, index) in streamCopy"
              :key="index"
              :text="chip.text"
              :timeStamp="chip.timeStamp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as Twitch from "../libs/twitch.js";
import { useRouter } from "vue-router";
import { store } from "@/store/store";
import TextChip from "@/components/TextChip";
import { ref } from "vue";
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

    let streamData = await axios.get(
      `http://localhost:3001/streams/getstream/${router.currentRoute._rawValue.params.idvideo}`
    );

    transcript.value = streamData.data.transcription;
    streamCopy.value = streamData.data.transcription;

    function search() {
      if (searchTerm.value == "") streamCopy.value = transcript.value;
      if (searchTerm.value != "")
        streamCopy.value = transcript.value.filter((el) =>
          el.text.includes(searchTerm.value)
        );
    }

    return { router, store, transcript, search, searchTerm, streamCopy };
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
