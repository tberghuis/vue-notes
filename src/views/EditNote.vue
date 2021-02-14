<template>
  <div>edit note</div>
  <textarea cols="30" rows="10" v-model="noteText"></textarea>
  <div>{{ $route.params }}</div>
  <!-- <div>{{noteText}}</div> -->
</template>

<script>
import store from "../store";
import { useRoute } from "vue-router";

export default {
  setup(props) {
    const route = useRoute();

    return {
      noteText: store.state.noteData.a,
    };
  },
};
</script>

<style>
</style>