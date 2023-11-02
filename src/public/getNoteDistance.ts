import { noteDefinitions } from '../consts/notes.js';

const findNoteIndex = (note: string) => {
  return noteDefinitions.findIndex((noteConfig) =>
    Object.values(noteConfig.names).includes(note)
  );
};

export const getNoteDistance = (x: string, y: string) => {
  const xIndex = findNoteIndex(x);
  const yIndex = findNoteIndex(y);
  const finalValue = xIndex > yIndex ? xIndex - (yIndex + 12) : xIndex - yIndex;

  return Math.abs(finalValue);
};
