import { majorScales, modes } from '../consts';
import type { TMode } from '../types';

export const getMajorFromMode = (tonic: string, mode: TMode) => {
  const modeIndex = modes.indexOf(mode);
  const scaleIndex = Object.values(majorScales).findIndex((notes) => {
    return notes[modeIndex] === tonic;
  });

  return Object.keys(majorScales)[scaleIndex];
};
