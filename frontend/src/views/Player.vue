<template>
  <Suspense>
    <template #default>
      <PlayerTwitch />
    </template>
    <template #fallback>
      <div class="bg-red-800 w-1/2">LOADING</div>
    </template>
  </Suspense>
</template>

<script>
import { store } from "@/store/store";
import PlayerTwitch from "@/components/PlayerTwitch";

export default {
  components: {
    PlayerTwitch,
  },
  setup() {
    return { store };
  },
};
</script>

<style></style>
