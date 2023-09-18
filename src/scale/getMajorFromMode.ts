import { majorScales, scaleTypes } from '../consts.js';
import type { TScaleType } from '../types.js';

export const getMajorFromMode = (tonic: string, mode: TScaleType) => {
  const modeIndex = scaleTypes.indexOf(mode);
  const scaleIndex = Object.values(majorScales).findIndex((notes) => {
    return notes.notes[modeIndex] === tonic;
  });

  return Object.keys(majorScales)[scaleIndex];
};
