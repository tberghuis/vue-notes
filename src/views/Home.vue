<template>
  <NoteList></NoteList>
  <NewNoteButton></NewNoteButton>
</template>

<script>
// @ is an alias to /src

import NoteList from "@/components/NoteList.vue";
import NewNoteButton from "@/components/NewNoteButton.vue";

export default {
  name: "Home",
  components: {
    NoteList,
    NewNoteButton,
  },
};
</script>
