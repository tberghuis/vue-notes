<template>
  <div>edit note</div>
  <textarea cols="30" rows="10" v-model="noteText"></textarea>
  <div>{{ $route.params }}</div>
  <!-- <div>{{noteText}}</div> -->
</template>

<script>
import { noteStore } from "../store";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  setup(props) {
    const route = useRoute();
    // console.log("value", noteStore.value[route.params.noteId]);

    // const noteText

    return {
      // noteText: noteStore.value[route.params.noteId],
      noteText: noteStore[route.params.noteId],
    };
  },
};
</script>

<style>
</style>