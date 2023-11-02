import { noteDefinitions } from '../consts/notes.js';

export const getNoteData = (note: string) => {
  return noteDefinitions.find((def) => Object.values(def.names).includes(note));
};
