<template>
  <div>
    <div class="mb-3 text-base">
      <h2 class="font-bold text-black ">Transcripción</h2>
    </div>
    <div>
      {{ interim_transcript_outter }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { store } from "@/store/store";
export default {
  name: "recorder",

  setup() {
    const speech = ref({});
    const interim_transcript_outter = ref("Comienza hablar");
    const final_transcript = ref("");
    const transcriptCount = ref(false);
    store.recognition = new window.webkitSpeechRecognition();

    console.log(store.recognition);

    store.recognition.lang = "es";
    store.recognition.continuous = true;
    store.recognition.interimResults = true;
    store.recognition.maxAlternatives = 1;

    let timeStamp = 0;
    store.recognition.start();
    store.recognition.onresult = (event) => {
      final_transcript.value = "";
      let interim_transcript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript.value += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
          interim_transcript_outter.value =
            interim_transcript.split("").length <= 24
              ? interim_transcript
              : interim_transcript.substr(
                  interim_transcript.split("").length - 25
                );
          if (transcriptCount.value == false) {
            console.log("CAPTURE TIMESTAMP");
            timeStamp = store.crono;
          }
          transcriptCount.value = true;
        }
      }
      if (final_transcript.value != "") {
        console.log("SAVE TO DB");
        console.log(timeStamp);
        store.craeteTranscript(final_transcript.value, timeStamp);
        transcriptCount.value = false;
      }
    };

    store.recognition.onend = function() {
      store.recognition.start();
    };

    return {
      speech,
      interim_transcript_outter,
      final_transcript,
      transcriptCount,
    };
  },

  beforeUnmount() {
    store.recognition.stop();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0;
}
</style>
