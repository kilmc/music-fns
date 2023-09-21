import { scaleTypes } from '../consts.js';
import { major } from '../db/scales/allScales.js';
import type { TScaleType } from '../types.js';

export const getMajorFromMode = (tonic: string, mode: TScaleType) => {
  const modeIndex = scaleTypes.indexOf(mode);
  const scaleIndex = Object.values(major).findIndex((notes) => {
    return notes.notes[modeIndex] === tonic;
  });

  return Object.keys(major)[scaleIndex];
};
