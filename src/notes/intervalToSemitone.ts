import { intervalsMap } from '../consts';
import type { TIntervalShorthand } from '../types';

export const intervalToSemitone = (interval: TIntervalShorthand, normalized = false) => {
	const semitones = intervalsMap[interval];

	if (normalized) {
		return semitones >= 12 ? semitones % 12 : semitones;
	}

	return semitones;
};
