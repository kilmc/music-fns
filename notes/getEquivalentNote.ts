import { notePositions } from '../consts';

export const getEquivalentNote = (note: string) => {
	const positionIndex = notePositions.findIndex((notes) => notes.includes(note));
	const noteGroup = notePositions[positionIndex];

	if (positionIndex !== -1 && noteGroup.length > 1) {
		return noteGroup[0] === note ? noteGroup[1] : noteGroup[0];
	}

	return note;
};
