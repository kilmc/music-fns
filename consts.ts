import type { TChordQuality, TChordType, TIntervalShorthand, TMode } from './types';

export const intervalsMap: Record<TIntervalShorthand, number> = {
	d2: 0,
	P1: 0,
	A1: 1,
	d3: 2,
	m2: 1,
	M2: 2,
	A2: 3,
	m3: 3,
	d4: 4,
	M3: 4,
	A3: 5,
	P4: 5,
	A4: 6,
	d5: 6,
	d6: 7,
	P5: 7,
	A5: 8,
	m6: 8,
	d7: 9,
	M6: 9,
	A6: 10,
	m7: 10,
	d8: 11,
	M7: 11,
	A7: 12,
	P8: 12,
	d9: 12,
	m9: 13,
	A8: 13,
	d10: 14,
	M9: 14,
	A9: 15,
	m10: 15,
	d11: 16,
	M10: 16,
	A10: 17,
	P11: 17,
	A11: 18,
	d12: 18,
	P12: 19,
	d13: 19,
	m13: 20,
	A12: 20,
	M13: 21,
	d14: 21,
	m14: 22,
	A13: 22,
	M14: 23,
	d15: 23,
	P15: 24,
	A14: 24,
	A15: 25
};
export const intervalsBySemitone: Record<string, TIntervalShorthand[]> = {
	'0': ['P1', 'd2'],
	'1': ['m2', 'A1'],
	'2': ['M2', 'd3'],
	'3': ['m3', 'A2'],
	'4': ['M3', 'd4'],
	'5': ['P4', 'A3'],
	'6': ['A4', 'd5'],
	'7': ['P5', 'd6'],
	'8': ['m6', 'A5'],
	'9': ['M6', 'd7'],
	'10': ['m7', 'A6'],
	'11': ['M7', 'd8'],
	'12': ['P8', 'A7', 'd9'],
	'13': ['m9', 'A8'],
	'14': ['M9', 'd10'],
	'15': ['A9', 'm10'],
	'16': ['d11', 'M10'],
	'17': ['A10', 'P11'],
	'18': ['A11', 'd12'],
	'19': ['P12', 'd13'],
	'20': ['m13', 'A12'],
	'21': ['M13', 'd14'],
	'22': ['m14', 'A13'],
	'23': ['M14', 'd15'],
	'24': ['P15', 'A14'],
	'25': ['A15']
};

export const chordQualityIntervalsMap: Record<string, TIntervalShorthand[]> = {
	major: ['P1', 'M3', 'P5'],
	augmented: ['P1', 'M3', 'A5'],
	minor: ['P1', 'm3', 'P5'],
	diminished: ['P1', 'm3', 'd5']
};

export const scaleIntervals: Record<TMode | string, TIntervalShorthand[]> = {
	ionian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8'],
	dorian: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7', 'P8'],
	phrygian: ['P1', 'm2', 'm3', 'P4', 'P5', 'm6', 'm7', 'P8'],
	lydian: ['P1', 'M2', 'M3', 'A4', 'P5', 'M6', 'M7', 'P8'],
	myxolydian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7', 'P8'],
	aeolian: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7', 'P8'],
	'harmonic-minor': ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'M7', 'P8'],
	'melodic-minor': ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'M7', 'P8'],
	locrian: ['P1', 'm2', 'm3', 'P4', 'd5', 'm6', 'm7', 'P8'],
	'dorian-b2': ['P1', 'm2', 'm3', 'P4', 'P5', 'M6', 'm7', 'P8']
};

export const notePositions = [
	['A'],
	['A#', 'Bb'],
	['B'],
	['C'],
	['C#', 'Db'],
	['D'],
	['D#', 'Eb'],
	['E'],
	['F'],
	['F#', 'Gb'],
	['G'],
	['G#', 'Ab']
];

export const majors: Record<string, string[]> = {
	C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
	F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
	Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
	Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
	Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
	Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
	Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
	Cb: ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
	G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
	D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
	A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
	E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
	B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
	'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
	'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
};

export const modes: TMode[] = [
	'ionian',
	'dorian',
	'phrygian',
	'lydian',
	'myxolydian',
	'aeolian',
	'locrian'
];
export const majorScaleQualities: TChordQuality[] = [
	'major',
	'minor',
	'minor',
	'major',
	'major',
	'minor',
	'diminished'
];

export const addTypes = ['add2', 'add4', 'add9', 'add11', 'add13'];
export const susTypes = ['sus2', 'sus4'];

export const numberTypeChordMap: Record<string, TChordType> = {
	2: 'second',
	4: 'fourth',
	5: 'fifth',
	6: 'sixth',
	7: 'seventh',
	9: 'ninth',
	11: 'eleventh',
	13: 'thirteenth'
};
