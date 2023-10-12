import { isScaleType } from '../modes/helpers.js';
import type { Mode, TScaleType } from '../types.js';

export const extractScaleName = (
  name: string
): [string, TScaleType | Mode] | undefined => {
  const regex = new RegExp(/([A-G](?:b|#)?) (.*)/i);
  const [pitchClass, scale] = name.match(regex)?.slice(1, 3) || [];

  if ((pitchClass || scale) === undefined) return undefined;

  const normalScale = scale.toLowerCase().replaceAll(' ', '-');
  const normalPitchClass =
    pitchClass.charAt(0).toUpperCase() + pitchClass.slice(1);

  if (normalScale === 'ionian') {
    return [normalPitchClass, 'major'];
  }

  if (normalScale === 'aeolian') {
    return [normalPitchClass, 'minor'];
  }

  if (isScaleType(normalScale)) return [normalPitchClass, normalScale];
};
