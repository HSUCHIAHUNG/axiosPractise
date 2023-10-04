<script setup>
import { onMounted, ref } from 'vue';
import { FETCH_ROOM, FETCH_JSON } from '@/service';

/** @const {array} 所有房型 */
const rooms = ref([]);

/** @const {array} getJsony資料 */
const getJsonData = ref([]);

/** @const {array} postJsonData資料 */
const postJsonData = ref([]);

/** @const {array} putJsonData資料 */
const putJsonData = ref([]);

/** @const {array} patchJsonData資料 */
const patchJsonData = ref([]);

/** @const {object} requestBody */
const requestBody = ref(
  {
    title: '',
    body: '',
    userId: 1,
  },
);

/** @func GET-取得所有房型資料 */
async function getRooms() {
  const { error, items } = await FETCH_ROOM.GetRooms();
  if (error) return;
  rooms.value = items;
}

/** @func GET-jsonplacehoder所有資料 */
async function getJson() {
  const { data, error } = await FETCH_JSON.GET();
  if (error) return;
  getJsonData.value = data;
}

/** @func POST-新增一筆jsonplacehoder資料 */
async function postJson() {
  const { data, error } = await FETCH_JSON.POST(requestBody.value);
  if (error) return;
  postJsonData.value = data;
}

/** @func PUT-新增或修改一筆jsonplacehoder資料 */
async function putJson() {
  const { data, error } = await FETCH_JSON.PUT(requestBody.value);
  if (error) return;
  putJsonData.value = data;
}

/** @func PATCH-新增或修改一筆jsonplacehoder資料 */
async function patchJson() {
  const { data, error } = await FETCH_JSON.PATCH(requestBody.value);
  if (error) return;
  patchJsonData.value = data;
}

/** @func DELETE-新增或修改一筆jsonplacehoder資料 */
async function deleteJson() {
  await FETCH_JSON.DELETE();
}

onMounted(async () => {
  await getRooms();
  await getJson();
});

</script>

<template>
  <section class=" pb-200px ">
    <h1 class=" text-center mt-50px ">[GET] 取得所有房型 - 點擊圖片可以看到各別房型資訊</h1>
    <ul class=" flex max-w-1200px justify-center m-[30px_auto] flex-wrap gap-30px ">
      <li v-for=" item in rooms " :key=item.id class="mb-30px w-25% h-300px shadow-lg shadow-gray-600/50">
        <router-link :to="`/login/${item.id}`">
          <img :src="item.imageUrl" :alt="item.name" class=" w-full h-full ">
        </router-link>
        <p class=" text-center pt-10px ">{{ item.name }}</p>
      </li>
    </ul>

    <div class=" max-w-1200px m-[30px_auto] ">
      <div class=" w-full flex flex-col items-center gap-10px mt-80px mb-80px ">
        <h1 class=" text-center mt-50px ">輸入資料</h1>
        <label class="text-left w-200px bold">title</label>
        <input v-model="requestBody.title" class=" w-200px pl-5px border border-solid border-#000 " />
        <label class="text-left w-200px bold">body</label>
        <input v-model="requestBody.body" class=" w-200px pl-5px border border-solid border-#000 " />
        <div>
          <button @click="postJson" class=" w-80px border border-solid border-#555 hover:bg-#555 hover:text-#fff">POST</button>
          <button @click="putJson" class=" w-80px ml-10px border border-solid border-#555 hover:bg-#555 hover:text-#fff">PUT</button>
          <button @click="patchJson" class=" w-80px ml-10px border border-solid border-#555 hover:bg-#555 hover:text-#fff">PATCH</button>
        </div>
      </div>

      <!-- GET -->
      <h1 class=" text-center mt-50px ">[GET-JSON] - 顯示一筆範例</h1>
      <p class=" text-center mt-20px ">{{ getJsonData[0] }}</p>

      <!-- POST -->
      <h1 class=" text-center mt-50px ">[POST-JSON] - 新增一筆資料</h1>
      <p class=" text-center mt-20px ">{{ postJsonData }}</p>

      <!-- PUT -->
      <h1 class=" text-center mt-50px ">[PUT-JSON] - 新增或修改指定資料 ( 固定第1筆 )</h1>
      <p class=" text-center mt-20px ">{{ putJsonData }}</p>

      <!-- PATCH -->
      <h1 class=" text-center mt-50px ">[PATCH-JSON] - 更新Server上現有資料的一部分 ( 固定第1筆 )</h1>
      <p class=" text-center mt-20px ">{{ patchJsonData }}</p>

      <!-- DELETE -->
      <h1 class=" text-center mt-50px ">[DELETE-JSON] - 刪除一筆資料 ( 固定第1筆 )</h1>
      <div class=" flex justify-center mt-20px ">
        <button @click="deleteJson" class=" w-80px ml-10px border border-solid border-#555 hover:bg-#555 hover:text-#fff">DELETE</button>
      </div>
    </div>

  </section>
</template>

<style>
 * {
  /* outline: 1px solid red; */
 }
</style>
