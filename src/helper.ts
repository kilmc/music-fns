import type { TMode } from './types';

export const isFlat = (str: string) => str.includes('b');
export const isSharp = (str: string) => str.includes('#');

export const isMajor = (mode: TMode) => mode === 'ionian';
export const isMinor = (mode: TMode) => mode === 'aeolian';
export const isMode = (mode: TMode) => !['aeolian', 'ionian'].includes(mode);

// Arr

export const offsetArr = <Type>(arr: Type[], amount: number) => {
	return [...arr.slice(amount), ...arr.slice(0, amount)];
};
