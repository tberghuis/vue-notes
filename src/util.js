import localForage from "localforage";
import store from "./store";

export async function loadNoteDataFromStorage() {
  const data = await localForage.getItem("noteData");
  if (data === null) {
    store.state.noteData = {};
    return;
  }
  store.state.noteData = data;
}

export function saveNoteDataToStorage(noteData) {
  localForage.setItem("noteData", noteData);
}
