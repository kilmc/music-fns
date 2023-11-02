import { ChordQuality } from '../consts/chords.js';

export const romanNumeralCase = (numeral: string, quality: ChordQuality) => {
  return quality === 'major' ? numeral : numeral.toLowerCase();
};
