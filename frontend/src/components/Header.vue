<template>
  <header class="text-gray-500 bg-gray-900 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <Logo />
        <router-link class="ml-3 text-xl" to="/">Word Seeker</router-link>
      </a>
      <div
        v-if="store.login.status == false"
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <nav class="md:m-auto sm:m-auto m-auto">
          <a href="https://id.twitch.tv/oauth2/authorize?client_id=l9expxe8ejc6rxjd80wzj4u9ohouo9&redirect_uri=http://localhost:8080/auth/&response_type=token&scope=user_read&force_verify=true">
            <button
              class="inline-flex text-white ml-4 items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-purple-900 rounded text-base mt-4 md:mt-0">
              Login
            </button>
          </a>
        </nav>
      </div>
      <div
        v-else
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <nav class="md:m-auto sm:m-auto m-auto">
          <router-link to="/profile">
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              :src="store.login.data.logo"
              alt="Profile picture"
            />
            <span class="ml-3 pt-3 text-white font-bold"> {{ store.login.data.name }} </span>
          </router-link>
          <button
            @click="store.logout"
            class="inline-flex ml-4 items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/svg/Logo.vue";
import { store } from "@/store/store";
export default {
  components: {
    Logo,
  },
  setup() {
    return { store };
  },
};
</script>
