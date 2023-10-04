<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { FETCH_ROOM } from '@/service';

const route = useRoute();

/** @const {array} 單一房型 */
const singleRooms = ref([]);

async function getSingleRoom() {
  const { room } = await FETCH_ROOM.getSingleRoom(route.params.id);
  singleRooms.value = room;
}

onMounted(async () => {
  await getSingleRoom();
});
</script>

<template>
  <h1 class=" text-center mt-50px ">[GET] 單一房型細節</h1>
  <ul class=" flex max-w-1200px justify-center m-[30px_auto] flex-wrap gap-30px ">
    <li v-for="  (item) in singleRooms " :key=item.id class="mb-30px w-25% h-300px shadow-lg shadow-gray-600/50">
      <img :src="item.imageUrl" :alt="item.name" class=" w-full h-full ">
      <p class=" text-center pt-10px ">{{ item.name }}</p>
    </li>
  </ul>
</template>
