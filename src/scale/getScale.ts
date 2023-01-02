import { scaleIntervals } from '../consts';
import { transposeNote } from '../notes/transpose';
import { getEquivalentNote } from '../notes/getEquivalentNote';
import { extractScaleName } from './extractName';
import { isValidScale } from './isValidScale';

const hasAccidental = (note: string) => {
	return /[#b]/.test(note);
};

const getValidScale = (scale: string[]) => {
	if (isValidScale(scale)) {
		return scale;
	} else {
		return scale.map((note) => (hasAccidental(note) ? getEquivalentNote(note) : note));
	}
};

export const getScale = (scaleName: string) => {
	const [pitchClass, mode] = extractScaleName(scaleName) || [];
	const generatedScale = Array(7).fill(pitchClass);

	if (pitchClass && mode !== undefined) {
		return getValidScale(
			generatedScale.map((note, i) => transposeNote(note, scaleIntervals[mode][i]))
		);
	}
};
