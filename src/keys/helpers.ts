import { majorScales } from '../consts.js';

export const getRelativeMinorName = (pitchClass: string) => {
  return `${majorScales[pitchClass][5]} minor`;
};
