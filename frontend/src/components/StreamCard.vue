<template>
  <h1>SAD</h1>
  <div
    :style="{
      backgroundImage:
        'linear-gradient(360deg, rgba(22,28,33,1) 0%, rgba(22,28,33,1) 66%, rgba(12,15,18,.90) 100%), url(' +
        store.stream.channel.profile_banner +
        ')',
    }"
    class="bg-indigo-500 text-white">
    <h1>{{ store.login.data.display_name }}</h1>
    <div
      :style="{ backgroundImage: 'url(' + store.login.data.logo + ')' }"
      class="pulsating button"></div>
    <div class="info">
      <div class="description">
        {{ store.stream.channel.status }}
      </div>
      <div class="lower-info">
        <span class="display_name">
          {{ store.stream.channel.display_name }}
        </span>
        <span class="crono">
          <Crono />
        </span>
      </div>
    </div>
  </div>
  <Recorder />
</template>

<script>
import { store } from "../store/store";
import Crono from "@/components/Crono";
import Recorder from './Recorder.vue';

export default {
  name: "streamCard",
  components: {
    Crono,
    Recorder
  },
   setup() {

    setInterval(async () => {
      try {
        if (store.stream != {}) {
          await store.getStream();
        }
      } catch (error) {
        console.log(error);
      }
    }, 300000);

    return { store };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
  font-size: 20px;
}

.lower-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
}

.description {
  margin-top: 0.9em;
  margin-bottom: 0.5em;
  margin-left: 0.7em;
  font-weight: 900;
}
.crono {
  margin-bottom: 0.5em;
  margin-left: 0.7em;
  text-align: right;
  color: var(--secondary-text);
}

.display_name {
  margin-left: 0.7em;
  font-weight: 400;
}

.container {
  /*background-image: url("https://static-cdn.jtvnw.net/jtv_user_pictures/6cdaa49b-a8f3-4470-8664-00bb75971848-profile_image-300x300.png");
  background-repeat: no-repeat;
  background-size: 1200px;
  background-position: top;*/
  font-family: "Roboto", sans-serif;
  text-align: left;
  margin: 1em;
  padding: 2.5em;
  width: 23rem;
  border-radius: 3rem;
  max-width: initial;
  
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
}

.avatar-picture {
  border-radius: 50%;
  width: 15rem;
}

.button {
  /*background-image: url("https://static-cdn.jtvnw.net/jtv_user_pictures/6cdaa49b-a8f3-4470-8664-00bb75971848-profile_image-300x300.png");*/
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: center;
  position: relative;
  margin: 1.5rem 0 3.4rem 0;
  /*background-color: var(--main-color);*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.button:after {
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  content: "";
  border: 5px solid var(--main-color);
  width: 100%;
  height: 100%;
  animation: pulsating 2s infinite;
}

.button:before {
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  content: "";
  border: 10px solid var(--main-color);
  width: 100%;
  height: 100%;
  animation: pulsating 2s infinite;
  animation-delay: 1s;
}

@keyframes pulsating {
  0% {
    transform: scale(1);
    border-width: 0;
    opacity: 1;
  }
  20% {
    border-width: 10px;
  }
  100% {
    transform: scale(1.5);
    border-width: 0px;
    opacity: 0;
  }
}
</style>
