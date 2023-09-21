import type { Mode, TScaleType } from './types.js';

export const isFlat = (str: string) => str.includes('b');
export const isSharp = (str: string) => str.includes('#');

export const isMajor = (mode: Mode | TScaleType) =>
  mode === 'ionian' || mode === 'major';
export const isMinor = (mode: Mode | TScaleType) =>
  mode === 'aeolian' || mode === 'minor';
export const isMode = (mode: Mode) => !['aeolian', 'ionian'].includes(mode);

// Arr

export const offsetArr = <Type>(arr: Type[], amount: number) => {
  return [...arr.slice(amount), ...arr.slice(0, amount)];
};
