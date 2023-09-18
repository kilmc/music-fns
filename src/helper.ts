import type { TMode, TScaleType } from './types.js';

export const isFlat = (str: string) => str.includes('b');
export const isSharp = (str: string) => str.includes('#');

export const isMajor = (mode: TMode | TScaleType) =>
  mode === 'ionian' || mode === 'major';
export const isMinor = (mode: TMode | TScaleType) =>
  mode === 'aeolian' || mode === 'minor';
export const isMode = (mode: TMode) => !['aeolian', 'ionian'].includes(mode);

// Arr

export const offsetArr = <Type>(arr: Type[], amount: number) => {
  return [...arr.slice(amount), ...arr.slice(0, amount)];
};
