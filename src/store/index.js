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

    deleteNote(state, noteId) {
      delete state.noteData[noteId];
    },
  },
  actions: {
    updateNote({ commit, state }, { noteId, noteText }) {
      commit("updateNote", { noteId, noteText });
      saveNoteDataToStorage(state);
    },

    deleteNote({ commit, state }, noteId) {
      commit("deleteNote", noteId);
      saveNoteDataToStorage(state);
    },
  },
  modules: {},
});

// todo remove
window.store = store;
