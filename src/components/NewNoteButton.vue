<template>
  <button @click="newNote">New Note</button>
</template>

<script>
import router from "../router";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "NewNoteButton",
  setup() {
    console.log("hello setup");

    function newNote(index) {
      console.log("new note");
      // router.push("/note/some-uuid");
      router.push(`/note/${uuidv4()}`);
    }

    return {
      newNote,
    };
  },
};
</script>

<style>
</style>