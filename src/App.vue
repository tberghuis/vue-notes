<template>
  <div v-if="dataLoaded">
    <router-view />
  </div>
  <div v-else>loading</div>
</template>

<script>
import { ref } from "vue";
import { loadNoteDataFromStorage } from "./util.js";

export default {
  setup() {
    const dataLoaded = ref(false);

    (async () => {
      await loadNoteDataFromStorage();
      dataLoaded.value = true;
    })();

    return { dataLoaded };
  },
};
</script>

<style>
</style>
