<template>
  <div>edit note</div>
  <textarea cols="30" rows="10" v-model="noteText"></textarea>
</template>

<script>
import store from "../store";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup(props) {
    const route = useRoute();

    const noteText = computed({
      get() {
        return store.state.noteData[route.params.noteId];
      },
      set(newNoteText) {
        store.dispatch("updateNote", {
          noteId: route.params.noteId,
          noteText: newNoteText,
        });
      },
    });

    return {
      noteText,
    };
  },
};
</script>

<style>
</style>