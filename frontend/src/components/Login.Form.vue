<template>
  <section class="text-gray-500 bg-gray-900 body-font h-full m-auto">
    <div class="container px-10 mx-auto flex flex-wrap lg:pb-12">
      <div class="lg:w-2/6 md:w-1/2 md:pr-16 md:m-auto lg:pr-0 pr-0 ">
        <h1 class="title-font font-medium text-3xl text-white">
          You will not regret using our system to create your account
        </h1>
        <p class="leading-relaxed mt-4">
          Our system is designed to be efficient, fast and friendly. Based on
          Node.js Express Mongo and vue
        </p>
      </div>
      <div
        class="lg:w-1/4 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0"
      >
        <Error
          v-if="store.errs.length != 0"
          :msg="store.errs[store.errs.length - 1].error"
        />
        <h2 class="text-white text-lg font-medium title-font mb-5 font-bold">
          Twitch Login
        </h2>
        <button
          class="text-white center-text bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-900 rounded text-lg"
          @click="clickLogin"
        >
          Twitch Login
        </button>

        <p class="text-xs text-gray-600 mt-3">
          You need an account to sign in.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "@/store/store";
import Error from "@/components/Error";
export default {
  components: {
    Error,
  },
  setup() {
    return { store };
  },
  beforeUnmount() {
    store.errs = [];
  },
};
</script>
