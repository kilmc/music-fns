import { notePositions } from '../consts';
import { offsetArr } from '../helper';

export const resetNotePositions = (note: string) => {
	const noteIndex = notePositions.findIndex((notes) => notes.includes(note));

	return offsetArr(notePositions, noteIndex);
};
