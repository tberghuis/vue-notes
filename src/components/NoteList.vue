<template>
  <div>notes list</div>

  <ul>
    <li v-for="id in Object.keys(noteData)" :key="id" @click="noteClick(id)">
      {{ noteData[id] }}
    </li>
  </ul>
</template>

<script>
import store from "../store";
import { useRouter } from "vue-router";

export default {
  name: "NoteList",

  setup() {
    const router = useRouter();
    function noteClick(noteId) {
      // console.log("note click id", noteId);
      router.push(`/note/${noteId}`);
    }

    return {
      noteData: store.state.noteData,
      noteClick,
    };
  },
};
</script>

<style>
</style>