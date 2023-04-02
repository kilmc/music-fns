import { majorScales } from '../consts';

export const getRelativeMinorName = (pitchClass: string) => {
  return `${majorScales[pitchClass][5]} minor`;
};
