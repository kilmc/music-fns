import { majorScaleQualities, modes, scaleTypes } from '../consts.js';
import { offsetArr } from '../helper.js';
import type { TMode, TScaleType } from '../types.js';
import { getChord } from './getChord.js';
import { scaleQualitiesToChordSymbol } from './helpers.js';

export const getScaleChords = (scale: string[], mode: TScaleType) => {
  const scaleQualities = offsetArr(
    majorScaleQualities,
    scaleTypes.indexOf(mode)
  );

  return scale.map((note, i) => {
    const quality = scaleQualitiesToChordSymbol(scaleQualities[i]);
    return getChord(`${note}${quality}`);
  });
};
