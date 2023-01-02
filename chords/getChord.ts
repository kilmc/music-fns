import { chordQualityIntervalsMap } from '../consts';
import { offsetArr } from '../helper';
import { transposeNote } from '../notes/transpose';
import type { IChord, IChordInfo, TIntervalShorthand } from '../types';
import { determineChord } from './determineChordInfo';

const chordInfoToIntervalMap = ({
	addType,
	alteredNotes,
	name,
	type,
	quality,
	susType
}: IChordInfo): TIntervalShorthand[] => {
	let intervals: TIntervalShorthand[] = chordQualityIntervalsMap[quality];

	if (type === 'fifth') {
		intervals = intervals.filter((interval) => !interval.includes('3'));
		intervals = intervals.concat('P8');
	}

	if (type === 'seventh') {
		intervals = intervals.concat('m7');
	}

	if (susType !== undefined) {
		intervals = intervals.map((interval) =>
			interval.includes('3') ? (susType === 'sus2' ? 'M2' : 'P4') : interval
		);
	}

	if (type === 'ninth' || name.includes('sus9')) {
		intervals = intervals.concat('m7', 'M9');
	}

	if (type === 'eleventh') {
		intervals = intervals.concat('m7', 'M9', 'P11');
	}

	if (type === 'thirteenth') {
		intervals = intervals.concat('m7', 'M9', 'P11', 'M13');
	}

	if (alteredNotes) {
		if (alteredNotes.includes('b5')) {
			intervals = intervals.map((interval) => (interval.includes('P5') ? 'd5' : interval));
		}
		if (alteredNotes.includes('#5')) {
			intervals = intervals.map((interval) => (interval.includes('P5') ? 'A5' : interval));
		}

		if (alteredNotes.includes('b9')) {
			intervals = intervals.concat('m9');
		}
		if (alteredNotes.includes('#9')) {
			intervals = intervals.concat('A9');
		}
	}

	if (addType) {
		if (addType.includes('2')) {
			intervals = [...intervals.slice(0, 1), 'M2', ...intervals.slice(1)];
		}
		if (addType.includes('4')) {
			intervals = [...intervals.slice(0, 2), 'P4', ...intervals.slice(2)];
		}
		if (addType.includes('9')) {
			intervals = intervals.concat('M9');
		}
		if (addType.includes('11')) {
			intervals = intervals.concat('P11');
		}
		if (addType.includes('13')) {
			intervals = intervals.concat('M13');
		}
	}

	return intervals;
};

export const getChord = (name: string): IChord => {
	if (name === '') {
		return {
			name: `Type a chord`,
			notes: []
		};
	}

	const chordInfo = determineChord(name);
	const finalIntervals = chordInfoToIntervalMap(chordInfo);

	if (finalIntervals === undefined) {
		return {
			name: `${name} is not supported yet`,
			notes: []
		};
	}

	let notes = finalIntervals.map((interval) => transposeNote(chordInfo.note, interval));
	const { slashNote } = chordInfo;

	if (slashNote) {
		const triad = notes.slice(0, 3);
		if (triad.includes(slashNote)) {
			const rootNoteIndex = triad.indexOf(slashNote);
			notes = offsetArr(notes, rootNoteIndex);
		}
	}

	return {
		name,
		notes
	};
};
