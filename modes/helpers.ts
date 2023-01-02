import { modes, scaleIntervals } from '../consts';
import type { TMode, TScaleType } from '../types';

export function isModeName(value: string): value is TMode {
	return modes.includes(value as TMode);
}

export function isScaleType(value: string): value is TScaleType {
	return Object.keys(scaleIntervals).includes(value as TScaleType);
}
