<template>
  <div>edit note</div>
  <textarea cols="30" rows="10" v-model="noteText"></textarea>
  <button @click="deleteNote">Delete Note</button>
</template>

<script>
import store from "../store";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

export default {
  setup(props) {
    const route = useRoute();
    const router = useRouter();

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

    function deleteNote() {
      store.dispatch("deleteNote", route.params.noteId);
      router.go(-1);
    }

    return {
      noteText,
      deleteNote,
    };
  },
};
</script>

<style>
</style>