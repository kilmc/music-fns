import { isScaleType } from '../modes/helpers.js';
import type { Mode, TScaleType } from '../types.js';

export const extractScaleName = (
  name: string
): [string, TScaleType | Mode] | undefined => {
  const regex = new RegExp(/([A-G](?:b|#)?) (.*)/);
  const [pitchClass, scale] = name.match(regex)?.slice(1, 3) || [];

  if ((pitchClass || scale) === undefined) return undefined;

  const normalScale = scale.toLowerCase().replaceAll(' ', '-');

  if (normalScale === 'ionian') {
    return [pitchClass, 'major'];
  }

  if (normalScale === 'aeolian') {
    return [pitchClass, 'minor'];
  }

  if (isScaleType(normalScale)) return [pitchClass, normalScale];
};
