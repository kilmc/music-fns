import { noteDefinitions } from '../../consts/notes.js';

export const noteToInteger = (note?: string) => {
  if (note === undefined) return -1;
  return noteDefinitions.findIndex((noteConfig) =>
    Object.values(noteConfig.names).includes(note)
  );
};
