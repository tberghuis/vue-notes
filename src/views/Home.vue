<template>
  <NoteList></NoteList>
  
</template>

<script>
// @ is an alias to /src

import NoteList from "@/components/NoteList.vue";

export default {
  name: "Home",
  components: {
    NoteList,
  },
};
</script>
