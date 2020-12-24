<template>
  <footer class="text-gray-500 bg-gray-900 body-font ">
    <div
      class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
    >
      <a
        class="flex title-font font-medium items-center md:justify-start justify-center text-white"
      >
        <Logo />
        <span class="ml-3 text-xl">TestApp</span>
      </a>
      <p
        class="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"
      >
        2020 tech test —
        <a
          href="https://twitter.com/girlazote"
          class="text-gray-500 ml-1"
          target="_blank"
          rel="noopener noreferrer"
          >@girlazote</a
        >
      </p>
      <span
        class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
      >
        <a href="https://twitter.com/girlazote" class="ml-3 text-gray-600">
          <Twitter />
        </a>
        <a href="https://instagram.com/estevesegura" class="ml-3 text-gray-600">
          <Instagram />
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/svg/Logo.vue";
import Twitter from "@/components/svg/Twitter.vue";
import Instagram from "@/components/svg/Instagram.vue";
export default {
  components: {
    Logo,
    Twitter,
    Instagram,
  },
};
</script>
