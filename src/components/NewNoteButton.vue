<template>
  <button @click="newNote">New Note</button>
</template>

<script>
export default {
  name: "NewNoteButton",
  setup() {
    console.log("hello setup");

    function newNote(index) {
      console.log("new note");
    }

    return {
      newNote,
    };
  },
};
</script>

<style>
</style>