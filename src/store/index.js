// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

import { ref, reactive } from "vue";

// export const noteStore = ref({ a: "dummy note" });

const store = { a: "this is dummy store" };

// export const noteStore = reactive({ a: "dummy note" });
export const noteStore = reactive(store);

export function updateNote(noteText) {
  // noteStore.value.a = noteText;
  noteStore.a = noteText;
}

window.noteStore = noteStore;
window.updateNote = updateNote;
window.store = store;