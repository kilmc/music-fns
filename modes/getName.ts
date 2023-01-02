import type { TMode } from '../types';

export const getModeName = (mode: TMode) => {
	switch (mode) {
		case 'ionian':
			return 'major';
		case 'aeolian':
			return 'minor';
		default:
			return mode;
	}
};
