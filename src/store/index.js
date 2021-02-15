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
  actions: {
    updateNote({ commit, state }, { noteId, noteText }) {
      console.log("state", state);
      commit("updateNote", { noteId, noteText });

      // todo localforage on noteData
    },
  },
  modules: {},
});

window.store = store;
