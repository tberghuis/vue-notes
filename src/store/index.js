import { createStore } from "vuex";

let store;

export default store = createStore({
  // state: {

  // },
  state() {
    return {
      noteData: { a: "first note vuex" },
    };
  },
  mutations: {
    updateNote(state, { noteId, noteText }) {
      state.noteData[noteId] = noteText;
    },
  },
  actions: {},
  modules: {},
});

window.store = store;

// store.watch(
//   () => store.state.noteData.a,
//   (val) => {
//     console.log("val", val);
//   }
// );
