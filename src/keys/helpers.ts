import { major } from '../db/scales/allScales.js';

export const getRelativeMinorName = (pitchClass: string) => {
  return `${major[pitchClass].notes[5]} minor`;
};
