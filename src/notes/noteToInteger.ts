import { keyboardNotePositions } from './helpers.js';

export const noteToInteger = (note: string) => {
  return keyboardNotePositions.findIndex((key) => key.includes(note));
};
