import { isFlat, isSharp } from '../helper';
import { getScale } from '../scale/getScale';
import type { TIntervalShorthand } from '../types';
import { intervalToSemitone } from './intervalToSemitone';
import { resetNotePositions } from './helpers';

interface IForceVariant {
	forceFlat?: boolean;
	forceSharp?: boolean;
}

const pickNoteVariant = (notes: string[], srcNote: string, options?: IForceVariant) => {
	const [hasFlat, hasSharp] = [isFlat(srcNote), isSharp(srcNote)];

	if (options?.forceSharp || hasSharp) {
		return notes[0];
	}

	if (options?.forceFlat || hasFlat) {
		return notes[1];
	}

	return notes[1];
};

const pickNoteFromScale = (notes: string[], scale: string[] | undefined) => {
	if (scale === undefined) {
		return 'X';
	}

	const correctIndex = notes.findIndex((note) => scale.includes(note));

	return correctIndex >= 0 ? notes[correctIndex] : 'X';
};

interface INoteTransposeOptions {
	forceFlat?: boolean;
	forceSharp?: boolean;
	keyName?: string;
}

export const transposeNote = (
	note: string,
	interval: TIntervalShorthand,
	options?: INoteTransposeOptions
): string => {
	const transposedNotes = resetNotePositions(note)[intervalToSemitone(interval, true)];

	if (transposedNotes.length === 1) {
		return transposedNotes[0];
	}

	if (/a/i.test(interval)) {
		return pickNoteVariant(transposedNotes, note, { forceSharp: true });
	}

	if (/d/i.test(interval)) {
		return pickNoteVariant(transposedNotes, note, { forceFlat: true });
	}

	if (options?.keyName !== undefined) {
		return pickNoteFromScale(transposedNotes, getScale(options.keyName));
	}

	return pickNoteVariant(transposedNotes, note);
};
