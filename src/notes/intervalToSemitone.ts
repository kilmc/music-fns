import { intervalsMap } from '../consts.js';
import type { IntervalShorthand } from '../types.js';

export const intervalToSemitone = (
  interval: IntervalShorthand,
  normalized = false
) => {
  const semitones = intervalsMap[interval];

  if (normalized) {
    return semitones >= 12 ? semitones % 12 : semitones;
  }

  return semitones;
};
