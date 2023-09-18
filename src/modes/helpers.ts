import { modes, scaleIntervals } from '../consts.js';
import type { TMode, TScaleType } from '../types.js';

export function isModeName(value: string | undefined): value is TMode {
  return modes.includes(value as TMode);
}

export function isScaleType(value: string): value is TScaleType {
  return Object.keys(scaleIntervals).includes(value as TScaleType);
}
