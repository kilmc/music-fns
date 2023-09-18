import { scaleIntervals } from '../consts.js';
import { transposeNote } from '../notes/transpose.js';
import { getEquivalentNote } from '../notes/getEquivalentNote.js';
import { extractScaleName } from './extractName.js';
import { isValidScale } from './isValidScale.js';
import { ScaleInfo, scales } from '../db/scales/allScales.js';
import { isScaleType } from '../modes/helpers.js';
import { getFriendlyModeName } from './helpers.js';

const hasAccidental = (note: string) => {
  return /[#b]/.test(note);
};

const getValidScale = (scale: string[]) => {
  if (isValidScale(scale)) {
    return scale;
  } else {
    return scale.map((note) =>
      hasAccidental(note) ? getEquivalentNote(note) : note
    );
  }
};

export const findScaleByName = (name: string): ScaleInfo => {
  const [pitchClass, mode] = extractScaleName(name) || [];
  const friendlyModeName = getFriendlyModeName(mode);

  if (
    isScaleType(friendlyModeName) &&
    scales[friendlyModeName] &&
    pitchClass !== undefined
  ) {
    return scales[friendlyModeName][pitchClass];
  }

  return {
    notes: [],
    midiNumbers: [],
    integers: [],
  };
};

export const getScale = (scaleName: string) => {
  const [pitchClass, mode] = extractScaleName(scaleName) || [];
  const friendlyModeName = getFriendlyModeName(mode);
  const generatedScale = Array(7).fill(pitchClass);

  if (pitchClass && mode !== undefined) {
    return getValidScale(
      generatedScale.map((note, i) =>
        transposeNote(note, scaleIntervals[friendlyModeName][i])
      )
    );
  }
};
