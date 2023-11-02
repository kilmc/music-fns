import { IntervalShorthand } from '../../consts/intervals.js';
import { ChordInfo } from '../../readers/chords/readChord.js';

const qualityMap: Record<string, IntervalShorthand[]> = {
  major: ['M3', 'P5'],
  dominant: ['M3', 'P5'],
  augmented: ['M3', 'A5'],
  minor: ['m3', 'P5'],
  'minor-major': ['m3', 'P5'],
  diminished: ['m3', 'd5'],
  'half-diminished': ['m3', 'd5'],
};

const seventhMap: Record<string, IntervalShorthand[]> = {
  major: ['M7'],
  dominant: ['m7'],
  minor: ['m7'],
  diminished: ['d7'],
  'minor-major': ['M7'],
  'half-diminished': ['m7'],
};

export const chordInfoToBaseIntervals = (
  chordInfo: ChordInfo
): IntervalShorthand[] => {
  const { type, quality } = chordInfo;

  if (type === 'seventh') {
    return [
      ...qualityMap[quality === undefined ? 'dominant' : quality],
      ...seventhMap[quality === undefined ? 'dominant' : quality],
    ];
  }

  if (quality === 'major') return qualityMap[quality];
  if (quality === 'minor') return qualityMap[quality];
  if (quality === 'diminished') return qualityMap[quality];
  if (quality === 'augmented') return qualityMap[quality];

  return [];
};
