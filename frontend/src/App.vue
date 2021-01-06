<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {store} from "@/store/store";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {

    if (localStorage.auth) {
      store.doLogin();
      store.login.status = true;
      store.login.data = JSON.parse(localStorage.auth);
      store.getStream()
    }

    store.recognition = new window.webkitSpeechRecognition();

    store.recognition.lang = "es";
    store.recognition.continuous = true;
    store.recognition.interimResults = true;
    store.recognition.maxAlternatives = 1;

    store.recognition.start();
    return {store};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(30px)
}

.route-enter-active,
.route-leave-active {
  transition: all .3s ease;
}

.route-enter-to,
.route-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
