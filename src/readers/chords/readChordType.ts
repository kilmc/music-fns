import { ChordType } from '../../consts/chords.js';
import { isMinorMajorSeventh } from '../../edgecases/isMinorMajorSeventh.js';
import {
  chordQualityRegex,
  chordTypeRegex,
  noteRegex,
} from '../../consts/regexes.js';

export const readChordType = (input: string): ChordType | undefined => {
  const regex = new RegExp(
    `${noteRegex.source}(${chordQualityRegex.source})?${chordTypeRegex.source}`
  );
  const match = input.match(regex)?.slice(4, 5)[0];

  if (match === undefined) {
    if (isMinorMajorSeventh(input)) {
      return 'seventh';
    } else {
      return 'triad';
    }
  }
  if (match === '2') return 'second';
  if (match === '4') return 'fourth';
  if (match === '5') return 'fifth';
  if (match === '6') return 'sixth';
  if (match === '7') return 'seventh';
  if (match === '9') return 'ninth';
  if (match === '11') return 'eleventh';
  if (match === '13') return 'thirteenth';
};
