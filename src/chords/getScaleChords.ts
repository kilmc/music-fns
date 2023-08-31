import { majorScaleQualities, modes } from '../consts';
import { offsetArr } from '../helper';
import type { TMode } from '../types';
import { getChord } from './getChord';
import { scaleQualitiesToChordSymbol } from './helpers';

export const getScaleChords = (scale: string[], mode: TMode) => {
  const scaleQualities = offsetArr(majorScaleQualities, modes.indexOf(mode));

  return scale.map((note, i) => {
    const quality = scaleQualitiesToChordSymbol(scaleQualities[i]);
    return getChord(`${note}${quality}`);
  });
};
