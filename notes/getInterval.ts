import { intervalsBySemitone } from '../consts';
import type { TIntervalShorthand } from '../types';
import { resetNotePositions } from './helpers';

export const getInterval = (
	noteX: string,
	noteY: string,
	showAlternatives = false
): TIntervalShorthand | TIntervalShorthand[] => {
	const allNotes = resetNotePositions(noteX);
	const noteYIndex = allNotes.findIndex((note) => note.includes(noteY));

	if (showAlternatives) {
		return intervalsBySemitone[noteYIndex];
	} else {
		return intervalsBySemitone[noteYIndex][0];
	}
};
