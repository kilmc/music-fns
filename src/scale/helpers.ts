import { ScaleGroups } from '../db/scales/allScales.js';

export const getFriendlyModeName = (
  modeName: string | undefined
): ScaleGroups => {
  switch (modeName) {
    case 'major':
    case 'ionian':
      return 'major';
    case 'dorian':
      return 'dorian';
    case 'phrygian':
      return 'phrygian';
    case 'lydian':
      return 'lydian';
    case 'mixolydian':
      return 'mixolydian';
    case 'minor':
    case 'aeolian':
      return 'minor';
    case 'locrian':
      return 'locrian';
    default:
      return 'major';
  }
};
