import { ScaleGroups, scales } from '../db/scales/allScales.js';
import { noteToInteger } from '../notes/noteToInteger.js';

type KeyGuess = { name?: string; scale: string[] };

const getScaleIntegersObj = (name: ScaleGroups) => {
  return Object.entries(scales[name]).reduce<Record<string, number[]>>(
    (accum, [scaleName, scaleInfo]) => {
      accum[`${scaleName} ${name}`] = scaleInfo.integers;
      return accum;
    },
    {}
  );
};

export const guessScale = (
  includedNotes: string[],
  excludedNotes: string[]
) => {
  const includedIntegers = includedNotes.map(noteToInteger);
  const excludedIntegers = excludedNotes.map(noteToInteger);
  const majorScales = getScaleIntegersObj('major');
  const possibleScales = Object.entries(majorScales).filter(
    ([scaleName, scale]) => {
      return !scale.some((note) => excludedIntegers.includes(note));
    }
  );

  const result = possibleScales.filter(([name, scale]) => {
    return includedIntegers.every((note) => {
      return scale.includes(note);
    });
  });

  return result;
};
