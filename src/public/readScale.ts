import { ScaleType, isScaleName, scaleTypes } from '../consts/scales.js';
import { noteRegex } from '../consts/regexes.js';

const scaleTypesOr = [...scaleTypes]
  .sort((a, b) => b.length - a.length)
  .join('|');

export type ScaleInfo = {
  noteName?: string;
  type?: ScaleType;
};

export const readScale = (input: string): ScaleInfo => {
  const regex = new RegExp(`(${noteRegex.source})\\s(${scaleTypesOr})`);
  const match = input.match(regex);

  const noteName = match?.at(1);
  const type = match?.at(4);

  return {
    noteName,
    type: isScaleName(type) ? type : undefined,
  };
};
