import { offsetArr } from './offsetArr.js';

const noteOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export const resetNoteOrder = (note: string) => {
  const noteIndex = noteOrder.findIndex((n) => note.includes(n));

  return offsetArr(noteOrder, noteIndex);
};
