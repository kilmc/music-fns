import { majors } from '../consts';

export const getRelativeMinorName = (pitchClass: string) => {
	return `${majors[pitchClass][5]} minor`;
};
