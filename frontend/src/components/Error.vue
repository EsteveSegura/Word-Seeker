<template>
  <div class="group border-red-500 bg-red-500 shadow-lg border-transparent mb-6 rounded-2xl py-3 px-4">
    <h1 class="text-white font-bold">Error</h1>
    <p class="text-white">
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>
