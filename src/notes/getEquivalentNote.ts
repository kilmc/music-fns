import { notePositions } from '../consts.js';
import { determineNoteType } from './determineNoteType.js';

export const getEquivalentNote = (note: string) => {
  const positionIndex = notePositions.findIndex((notes) =>
    Object.values(notes).includes(note)
  );
  const noteGroup = notePositions[positionIndex];
  const hasEquivalents = Object.values(noteGroup).length > 1;

  if (positionIndex !== -1 && hasEquivalents) {
    const currentNoteType = determineNoteType(note);
    return Object.entries(noteGroup)
      .filter(([type, noteValue]) => type !== currentNoteType)
      .flatMap((x) => x)[1];
  }

  return note;
};

export const getWhiteNoteEquivalent = (note: string) => {
  const exceptions = [
    ['B', 'Cb'],
    ['C', 'B#'],
    ['E', 'Fb'],
    ['F', 'E#'],
  ];

  const positionIndex = exceptions.findIndex((notes) => notes.includes(note));
  const noteGroup = exceptions[positionIndex];
  if (positionIndex !== -1 && noteGroup.length > 1) {
    return noteGroup[0] === note ? noteGroup[1] : noteGroup[0];
  } else {
    return '';
  }
};
