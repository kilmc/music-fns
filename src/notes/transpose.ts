import type { IntervalShorthand } from '../types.js';
import { intervalToSemitone } from './intervalToSemitone.js';
import { resetNotePositions } from './helpers.js';
import { NotePosition } from '../consts.js';

const pickNoteFromScale = (noteGroup: NotePosition, scale: string[]) => {
  if (scale === undefined) return 'X';

  if (noteGroup.flat && scale.includes(noteGroup.flat)) {
    return noteGroup.flat;
  } else if (noteGroup.sharp && scale.includes(noteGroup.sharp)) {
    return noteGroup.sharp;
  } else if (noteGroup.natural && scale.includes(noteGroup.natural)) {
    return noteGroup.natural;
  }

  return 'X';
};

interface INoteTransposeOptions {
  forceFlat?: boolean;
  forceSharp?: boolean;
  forceSimple?: boolean;
  scale?: string[];
}

export const transposeNote = (
  note: string,
  interval: IntervalShorthand,
  options?: INoteTransposeOptions
): string => {
  const transposedNotes =
    resetNotePositions(note)[intervalToSemitone(interval, true)];

  if (Object.values(transposedNotes).length === 1 && transposedNotes.natural) {
    return transposedNotes.natural;
  }

  if (options?.forceSimple && transposedNotes.natural) {
    return transposedNotes.natural;
  }

  // Note: There are individual checks for augmented and diminished intervals because even if the chord
  // is spelled with a sharp or flat, you want the transposition to be according to the type of
  // interval (augmented, diminished). If you combine the boolean logic it forces notes in a
  // Bbaug to be Bb D Gb instead of what it should be which is Bb D F# to reflect the sharpening
  // of the 5th in the chord
  if (/a/i.test(interval) && transposedNotes.sharp) {
    return transposedNotes.sharp;
  }

  if (/d/i.test(interval) && transposedNotes.flat) {
    return transposedNotes.flat;
  }

  if (options?.forceFlat && options?.forceSharp) {
    console.error(
      'You cannot pass both forceFlat and ForceSharp options at the same time'
    );
  }

  if (options?.forceSharp && transposedNotes.sharp) {
    return transposedNotes.sharp;
  }

  if (options?.forceFlat && transposedNotes.flat) {
    return transposedNotes.flat;
  }

  if (options?.scale !== undefined) {
    return pickNoteFromScale(transposedNotes, options.scale);
  }

  return transposedNotes.natural
    ? transposedNotes.natural
    : transposedNotes.flat || '';
};
