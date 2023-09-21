import { majorScaleQualities, romanNumerals, scaleTypes } from '../consts.js';
import { offsetArr } from '../helper.js';
import { Chord, TScaleType } from '../types.js';
import { romanNumeralCase, scaleQualitiesToChordSymbol } from './helpers.js';

export const getScaleChords = (
  scale: string[],
  scaleType: TScaleType = 'major'
): Chord[] => {
  const thirds = offsetArr(scale, 2);
  const fifths = offsetArr(scale, 4);
  const scaleQualities = offsetArr(
    majorScaleQualities,
    scaleTypes.indexOf(scaleType)
  );

  return scale.map((note, i) => {
    const chordName = `${note}${scaleQualitiesToChordSymbol(
      scaleQualities[i]
    )}`;
    return {
      name: chordName,
      notes: [note, thirds[i], fifths[i]],
      romanNumeral: romanNumeralCase(romanNumerals[i], scaleQualities[i]),
    };
  });
};
