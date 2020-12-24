<template>
  <section class="text-gray-500 bg-gray-900 body-font m-auto">
    <div
      class="container mx-auto flex px-24 md:flex-row flex-col items-center pb-12">
      <div
        class="pb-5 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:pb-4 items-center  text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <strong>Sign up,</strong> <br class="hidden lg:inline-block" />And
          edit your data
        </h1>
        <p class="mb-8 leading-relaxed">
          There are many websites on the internet and they all show wonderful
          things, this website is not far behind. You should consider continuing
          with your registration if you suffer from Stendhal syndrome. I don't
          know how you can resist!
        </p>
        <div v-if="store.login.status == false" class="flex justify-center">
          <a href="https://id.twitch.tv/oauth2/authorize?client_id=l9expxe8ejc6rxjd80wzj4u9ohouo9&redirect_uri=http://localhost:8080/auth/&response_type=token&scope=user_read&force_verify=true">
          <button
            class="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
            Twitch Login
          </button>
          </a>
        </div>
        <div v-else class="flex justify-center">
          <router-link to="/auth"
            ><button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Profile
            </button>
            </router-link
          >
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <HeroIllustration width="100%" />
      </div>
    </div>
  </section>
</template>

<script>
import HeroIllustration from "@/components/svg/HeroIllustration.vue";
import { store } from "@/store/store";
export default {
  components: {
    HeroIllustration,
  },
  setup() {
    return { store };
  },
};
</script>
