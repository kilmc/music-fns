import { modes, scaleIntervals } from '../consts.js';
import type { Mode, TScaleType } from '../types.js';

export function isModeName(value: string | undefined): value is Mode {
  return modes.includes(value as Mode);
}

export function isScaleType(value: string): value is TScaleType {
  return Object.keys(scaleIntervals).includes(value as TScaleType);
}
