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

const ninthMap: Record<string, IntervalShorthand[]> = {
  major: ['M7', 'M9'],
  dominant: ['m7', 'M9'],
  minor: ['m7', 'M9'],
};

const eleventhMap: Record<string, IntervalShorthand[]> = {
  major: ['M7', 'M9', 'P11'],
  dominant: ['m7', 'M9', 'P11'],
  minor: ['m7', 'M9', 'P11'],
};

const thirteenthMap: Record<string, IntervalShorthand[]> = {
  major: ['M7', 'M9', 'M13'],
  dominant: ['m7', 'M9', 'P11', 'M13'],
  minor: ['m7', 'M9', 'M13'],
};

export const chordInfoToBaseIntervals = (
  chordInfo: ChordInfo
): IntervalShorthand[] => {
  const { type, quality } = chordInfo;

  // second handled in createAddNotes as they're aliases

  if (type === 'fourth') return ['P4', 'm7', 'm10'];
  if (type === 'fifth') return ['P5', 'P8'];

  if (type === 'sixth') {
    return [...qualityMap[quality === undefined ? 'dominant' : quality], 'M6'];
  }

  if (type === 'seventh') {
    return [
      ...qualityMap[quality === undefined ? 'dominant' : quality],
      ...seventhMap[quality === undefined ? 'dominant' : quality],
    ];
  }

  if (type === 'ninth') {
    return [
      ...qualityMap[quality === undefined ? 'dominant' : quality],
      ...ninthMap[quality === undefined ? 'dominant' : quality],
    ];
  }

  if (type === 'eleventh') {
    return [
      ...qualityMap[quality === undefined ? 'dominant' : quality],
      ...eleventhMap[quality === undefined ? 'dominant' : quality],
    ];
  }

  if (type === 'thirteenth') {
    return [
      ...qualityMap[quality === undefined ? 'dominant' : quality],
      ...thirteenthMap[quality === undefined ? 'dominant' : quality],
    ];
  }

  if (quality === 'major') return qualityMap[quality];
  if (quality === 'minor') return qualityMap[quality];
  if (quality === 'diminished') return qualityMap[quality];
  if (quality === 'augmented') return qualityMap[quality];

  return [];
};
