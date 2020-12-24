<template>
  <div class="m-auto flex justify-center items-center">
    <div
      class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
      <div class="relative mb-6">
        <img
          class="w-full"
          :src="store.login.data.logo"
          alt="Profile picture"/>
        <div class="text-center absolute w-full" style="bottom: -30px">
          <div class="mb-10">
            <p class="text-white  tracking-wide uppercase text-lg font-bold ">
              sad
            </p>
            <p class="text-gray-200 text-sm ">@sad</p>
          </div>
          <router-link to=/update>
          <button class="mx-3 p-4 rounded-full transition ease-in duration-200 focus:outline-none button-glow" >
            <svg
              viewBox="0 0 1279.41351 1001.73248"
              enable-background="new 0 0 20 20"
              class="w-6 h-6 ">
              <path
                fill="#FFFFFF"
                d="M795,2.6c-5.8,1.3-26.9,5.9-47,10.3S670.1,29.9,619.5,41,513.3,64.2,496,68s-45,9.8-61.5,13.5l-30,6.5L204.2,288.3C89.5,402.9,3,490.1,1.9,492.2c-2.7,5.2-2.4,8.8,1,13.4,1.6,2.1,37,38,78.7,79.6l75.9,75.7,14.5,2.5c8,1.4,20.4,3.7,27.5,5,16.9,3.2,33.3,5.6,38,5.6,3.4,0,5.2-1.4,24.4-19.2,11.3-10.6,52.3-51,91.1-90l70.6-70.7,56.8,56.8,56.7,56.7-15.3,15.1C468.5,675.2,347.1,792.3,345.4,793c-3.5,1.4-10.2,10-14.3,18.5-5.7,11.7-7.5,19.8-7.5,34,0,14.8,1.7,22.2,8.5,36.2,2.7,5.6,4.9,10.7,4.9,11.4,0,4.5,15.6,27.9,18.6,27.9.9,0,14.1,12,29.4,26.6,31.7,30.3,36.4,34.1,47.5,39.4,12.9,6.1,19.2,7.5,34,7.5,15.1,0,21.8-1.5,34-7.5,8.2-4.1,18.1-11.8,19.4-15.2.3-1,42.3-45.4,93.1-98.8l92.5-96.9L818.1,888.6l112.6,112.6,8.5.5c15.7,1,32.3-3.9,51.2-15.1,25.2-15,50.9-35.8,78.7-63.5,29.5-29.5,45.4-50.7,60.5-80.6,10-19.9,13.4-29.9,13.4-39.4,0-14.8,9.2-4.5-117-130.6-62.2-62.1-112.9-113.3-112.8-113.7.2-.3,17.9-19.1,39.3-41.6,21.5-22.5,42.4-44.6,46.6-49,8.9-9.6,14.6-12.8,21.1-11.7,2.2.4,12.8,5.2,23.4,10.6,21.3,11,32.8,15.7,47.9,19.7,9.6,2.6,11.1,2.7,34,2.7,20.9-.1,25.3-.4,34-2.3,14.4-3.1,21.5-5.6,35-12.2,38.8-18.9,65.8-54.5,78.1-103.1,4.8-19.2,6.8-35.8,6.9-57.1,0-18.3-.1-19.8-2.1-22.4a10.45762,10.45762,0,0,0-4.5-3.5c-3.5-.9-32.6-15.7-33.4-16.9-1.6-2.6-8.8-.4-37.9,11.5-16.8,6.9-44.4,18.1-61.2,25s-30.9,12.5-31.3,12.5c-1.2,0-80.3-142.2-79.5-143,.5-.5,28.4-18.9,61.9-41,33.6-22.1,62.5-41.7,64.3-43.6,2.7-2.9,3.2-4.1,3.2-8.3,0-3-.5-5.3-1.4-6a54.16108,54.16108,0,0,1-5.6-8.2c-3.5-6-5.3-7.7-12.8-12.8-23.3-15.6-45.5-26.3-68.7-33-28.7-8.3-63-7.4-92.4,2.5-24.3,8.1-41.7,18.7-59.2,36.3-17.8,17.8-29.5,37.3-37.8,62.6-7.7,23.7-10,40.4-10.2,75-.1,21.1.2,26.2,2.5,41.8,4.6,31.7,3.7,35.9-10.5,48.8-4.6,4.2-31.3,30-59.4,57.2l-51,49.6L694,340.4,635.5,282,749.3,168.2C811.8,105.7,863,54.3,863,54s-9.8-10.4-21.8-22.6C821.7,11.6,808.6-.2,806.3.1,805.9.1,800.8,1.2,795,2.6Z" />
            </svg>
          </button>
          </router-link>
          <router-link to=/delete>
          <button class="mx-3 p-4 rounded-full transition ease-in duration-200 focus:outline-none button-glow" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
          </button>
          </router-link>
        </div>
      </div>
      <div class="py-10 px-6 text-center tracking-wide grid grid-cols-2 gap-6">
        <div class="country">
          <p class="text-lg">ssssss</p>
          <p class="text-gray-400 text-sm">Country</p>
        </div>
        <div class="phone">
          <p class="text-lg">sssssssss</p>
          <p class="text-gray-400 text-sm">Phone</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/store";
export default {
  setup() {
    if (window.location.hash){
      store.setLogin(true);
      console.log(window.location.hash)
    }

    return { store };
  },
};
</script>

<style scoped>
  .button-glow {
    background-color: #6617cb;
    background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
    box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 30px #6617cb;
  }
  .button-glow:hover {
    box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 60px #6617cb;
  }
  .shadow{
    text-shadow: 6px 5px 6px #545454;
  }
</style>
