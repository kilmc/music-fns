import { ChordQuality } from '../../consts/chords.js';
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

const isSupported = (
  obj: Record<string, IntervalShorthand[]>,
  quality: ChordQuality
) => {
  return obj[quality] !== undefined;
};

export const chordInfoToBaseIntervals = (
  chordInfo: ChordInfo
): IntervalShorthand[] => {
  const { type, quality: rawQuality } = chordInfo;

  const quality = rawQuality === undefined ? 'dominant' : rawQuality;

  // second handled in createAddNotes as they're aliases

  if (type === 'fourth') return ['P4', 'm7', 'm10'];
  if (type === 'fifth') return ['P5', 'P8'];

  if (type === 'sixth') {
    return [...qualityMap[quality], 'M6'];
  }

  if (type === 'seventh' && isSupported(seventhMap, quality)) {
    return [...qualityMap[quality], ...seventhMap[quality]];
  }

  if (type === 'ninth' && isSupported(ninthMap, quality)) {
    return [...qualityMap[quality], ...ninthMap[quality]];
  }

  if (type === 'eleventh' && isSupported(eleventhMap, quality)) {
    return [...qualityMap[quality], ...eleventhMap[quality]];
  }

  if (type === 'thirteenth' && isSupported(thirteenthMap, quality)) {
    return [...qualityMap[quality], ...thirteenthMap[quality]];
  }

  if (quality === 'major') return qualityMap[quality];
  if (quality === 'minor') return qualityMap[quality];
  if (quality === 'diminished') return qualityMap[quality];
  if (quality === 'augmented') return qualityMap[quality];

  return [];
};
