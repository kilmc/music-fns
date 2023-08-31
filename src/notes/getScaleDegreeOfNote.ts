import { majorScaleRomanNumerals } from '../consts';

export const getScaleDegreeOfNote = (note: string, scale: string[]) =>
  majorScaleRomanNumerals[scale.indexOf(note)];
