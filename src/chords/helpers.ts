import { addTypes, susTypes } from '../consts';
import type { TAddType, TChordQuality, TSusType } from '../types';

export function isAddType(value: string): value is TAddType {
	return addTypes.includes(value as TAddType);
}

export function isSusType(value: string): value is TSusType {
	return susTypes.includes(value as TSusType);
}

export const chordRegexp = new RegExp(
	/((?:^[A-G])(?:#|b)?)(aug|dim|maj|m|M|o|\+)?(2|4|5|6|7|9|11|13)?((?:(?:#|b)(?:5|7|9|11|13))+)?(add(?:2|4|9|11|13)?)?(sus(?:2|4|9)?)?(\/[A-G](?:#|b)?)?/
);

export const scaleQualitiesToChordSymbol = (quality: TChordQuality) => {
	switch (quality) {
		case 'major':
			return '';
		case 'minor':
			return 'm';
		case 'diminished':
			return 'dim';
		default:
			return 'major';
	}
};
