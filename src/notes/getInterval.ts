import { intervalsBySemitone } from '../consts.js';
import type { IntervalShorthand } from '../types.js';
import { resetNotePositions } from './helpers.js';

export const getInterval = (
  noteX: string,
  noteY: string,
  showAlternatives = false
): IntervalShorthand | IntervalShorthand[] => {
  const allNotes = resetNotePositions(noteX);
  const noteYIndex = allNotes.findIndex((note) =>
    Object.values(note).includes(noteY)
  );

  if (showAlternatives) {
    return intervalsBySemitone[noteYIndex];
  } else {
    return intervalsBySemitone[noteYIndex][0];
  }
};
