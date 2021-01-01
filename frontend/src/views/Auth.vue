<template>
  <section class="text-gray-500 bg-gray-900 body-font m-auto">
    <div class="container mx-auto flex px-24 md:flex-row flex-col items-center pb-12">
      <div v-if="store.stream">
        <router-link to="/profile">
          <img
              class="inline-block  h-8 w-8 rounded-full ring-2 ring-white"
              :src="store.login.data.logo"
              alt="Profile picture"
          />
          <span class="ml-3 pt-3 text-white font-bold"> {{ store.login.data.name }} </span>
          <span class="ml-3 pt-3 text-white font-bold"> {{ store.stream.channel.status }} </span>
        </router-link>
      </div>
      <div v-else-if="store.stream == null">
        <h1>Stream not started</h1>
      </div>
      <div v-else>
        Loading
      </div>
    </div>
  </section>
</template>

<script>
import {store} from "@/store/store";

export default {
  components: {},
  setup() {
    store.doLogin();
    store.getStream();

    return {store};
  },
};
</script>
