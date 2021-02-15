import { createStore } from "vuex";
import { saveNoteDataToStorage } from "../util.js";

let store;

export default store = createStore({
  state: {},
  // state() {
  //   return {
  //     noteData: { a: "first note vuex" },
  //   };
  // },
  mutations: {
    updateNote(state, { noteId, noteText }) {
      state.noteData[noteId] = noteText;
    },
  },
  actions: {
    updateNote({ commit, state }, { noteId, noteText }) {
      commit("updateNote", { noteId, noteText });
      const noteData = JSON.parse(JSON.stringify(state.noteData));
      saveNoteDataToStorage(noteData);
    },
  },
  modules: {},
});

// todo remove
window.store = store;
