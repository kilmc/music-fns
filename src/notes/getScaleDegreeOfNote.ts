import { romanNumeralCase } from '../chords/helpers.js';
import { majorScaleQualities, modes, romanNumerals } from '../consts.js';
import { offsetArr } from '../helper.js';
import { TMode } from '../types.js';

export const getScaleDegreeOfNote = (
  note: string,
  scale: string[],
  mode: TMode = 'ionian'
) => {
  const reOrdered = offsetArr(majorScaleQualities, modes.indexOf(mode));
  return romanNumerals.map((numeral, i) => {
    return romanNumeralCase(numeral, reOrdered[i]);
  })[scale.indexOf(note)];
};
