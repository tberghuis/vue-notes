<template>
  <div>edit note</div>
  <textarea cols="30" rows="10" v-model="noteText"></textarea>
  <div>{{ $route.params }}</div>
  <!-- <div>{{noteText}}</div> -->
</template>

<script>
import store from "../store";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

export default {
  setup(props) {
    const route = useRoute();

    const noteText = computed({
      get() {
        return store.state.noteData[route.params.noteId];
      },
      set(newNoteText) {
        console.log("set called");
        // store.state.noteData[route.params.noteId] = newVal;

        store.commit("updateNote", {
          noteId: route.params.noteId,
          noteText: newNoteText,
        });
      },
    });
    // const noteText = ref(store.state.noteData[route.params.noteId]);

    // computed(() => {
    //   noteText.value = store.state.noteData[route.params.noteId];
    // });

    // function updateNote(arg1) {
    //   console.log("arg1", arg1);
    // }

    return {
      noteText,
      // updateNote,
    };
  },
};
</script>

<style>
</style>