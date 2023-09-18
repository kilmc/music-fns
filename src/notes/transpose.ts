import { isFlat, isSharp } from '../helper.js';
import { findScaleByName, getScale } from '../scale/getScale.js';
import type { TIntervalShorthand } from '../types.js';
import { intervalToSemitone } from './intervalToSemitone.js';
import { resetNotePositions } from './helpers.js';
import { NotePosition } from '../consts.js';

interface PickNoteVariantOptions {
  forceFlat?: boolean;
  forceSharp?: boolean;
  forceScale?: string[];
}

const pickNoteVariant = (
  notes: NotePosition,
  srcNote: string,
  options?: PickNoteVariantOptions
) => {
  const [hasFlat, hasSharp] = [isFlat(srcNote), isSharp(srcNote)];
  if (options?.forceSharp || hasSharp) {
    return notes.sharp;
  }

  if (options?.forceFlat || hasFlat) {
    return notes.flat;
  }

  return notes.natural ? notes.natural : notes.flat;
};

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
  forceAliasAccidentals?: boolean;
  keyName?: string;
}

export const transposeNote = (
  note: string,
  interval: TIntervalShorthand,
  options?: INoteTransposeOptions
): string => {
  const transposedNotes =
    resetNotePositions(note)[intervalToSemitone(interval, true)];

  const chooseSharp = /a/i.test(interval) || options?.forceSharp;
  const chooseFlat = /d/i.test(interval) || options?.forceFlat;

  if (Object.values(transposedNotes).length === 1 && transposedNotes.natural) {
    return transposedNotes.natural;
  }

  if (chooseSharp && transposedNotes.sharp) {
    return transposedNotes.sharp;
  }

  if (chooseFlat && transposedNotes.flat) {
    return transposedNotes.flat;
  }

  if (options?.forceFlat && options.forceSharp) {
    console.error(
      'You cannot pass both forceFlat and ForceSharp options at the same time'
    );
  }

  if (options?.keyName !== undefined) {
    return pickNoteFromScale(
      transposedNotes,
      findScaleByName(options.keyName)?.notes
    );
  }

  return transposedNotes.natural
    ? transposedNotes.natural
    : transposedNotes.flat || '';
};
