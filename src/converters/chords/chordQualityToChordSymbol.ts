import { ChordQuality } from '../../consts/chords.js';

export const chordQualityToChordSymbol = (quality: ChordQuality) => {
  switch (quality) {
    case 'major':
      return '';
    case 'minor':
      return 'm';
    case 'diminished':
      return 'dim';
    case 'augmented':
      return 'aug';
    default:
      return 'major';
  }
};
