import { romanNumeralCase } from '../chords/helpers.js';
import { majorScaleQualities, romanNumerals, scaleTypes } from '../consts.js';
import { offsetArr } from '../helper.js';
import { isScaleType } from '../modes/helpers.js';
import { extractScaleName } from './extractName.js';

export const getScaleDegrees = (scaleName: string) => {
  const [_, scaleType] = extractScaleName(scaleName) || [];
  if (scaleType === undefined || !isScaleType(scaleType)) return [];

  const reOrdered = offsetArr(
    majorScaleQualities,
    scaleTypes.indexOf(scaleType)
  );

  return romanNumerals.map((numeral, i) => {
    return romanNumeralCase(numeral, reOrdered[i]);
  });
};
