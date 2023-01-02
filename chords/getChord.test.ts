import { describe, expect, it } from 'vitest';
import { getChord } from './getChord';

describe('getChord', () => {
	it('supports major chords', () => {
		expect(getChord('C').notes).toEqual(['C', 'E', 'G']);
		expect(getChord('Eb').notes).toEqual(['Eb', 'G', 'Bb']);
	});

	it('supports minor chords', () => {
		expect(getChord('Am').notes).toEqual(['A', 'C', 'E']);
		expect(getChord('D#m').notes).toEqual(['D#', 'F#', 'A#']);
	});

	it('supports augmented chords', () => {
		expect(getChord('Caug').notes).toEqual(['C', 'E', 'G#']);
		expect(getChord('C#aug').notes).toEqual(['C#', 'F', 'A']);
		expect(getChord('Bbaug').notes).toEqual(['Bb', 'D', 'F#']);
		expect(getChord('Aaug7').notes).toEqual(['A', 'Db', 'F', 'G']);
	});

	it('supports diminished chords', () => {
		expect(getChord('Cdim').notes).toEqual(['C', 'Eb', 'Gb']);
		expect(getChord('C#dim').notes).toEqual(['C#', 'E', 'G']);
		expect(getChord('Dbdim').notes).toEqual(['Db', 'E', 'G']);
		expect(getChord('Ddim').notes).toEqual(['D', 'F', 'Ab']);
		expect(getChord('D#dim').notes).toEqual(['D#', 'F#', 'A']);
		expect(getChord('Ebdim').notes).toEqual(['Eb', 'Gb', 'A']);
		expect(getChord('Edim').notes).toEqual(['E', 'G', 'Bb']);
		expect(getChord('Fdim').notes).toEqual(['F', 'Ab', 'B']);
		expect(getChord('F#dim').notes).toEqual(['F#', 'A', 'C']);
		expect(getChord('Gbdim').notes).toEqual(['Gb', 'A', 'C']);
		expect(getChord('Gdim').notes).toEqual(['G', 'Bb', 'Db']);
		expect(getChord('G#dim').notes).toEqual(['G#', 'B', 'D']);
		expect(getChord('Abdim').notes).toEqual(['Ab', 'B', 'D']);
		expect(getChord('Adim').notes).toEqual(['A', 'C', 'Eb']);
		expect(getChord('A#dim').notes).toEqual(['A#', 'C#', 'E']);
		expect(getChord('Bbdim').notes).toEqual(['Bb', 'Db', 'E']);
		expect(getChord('Bdim').notes).toEqual(['B', 'D', 'F']);
	});

	it('supports modified notes', () => {
		expect(getChord('C7b5').notes).toEqual(['C', 'E', 'Gb', 'Bb']);
		expect(getChord('C7#5').notes).toEqual(['C', 'E', 'G#', 'Bb']);
		expect(getChord('Cm7#5').notes).toEqual(['C', 'Eb', 'G#', 'Bb']);
		expect(getChord('C7b9').notes).toEqual(['C', 'E', 'G', 'Bb', 'Db']);
		expect(getChord('C7#9').notes).toEqual(['C', 'E', 'G', 'Bb', 'D#']);
		expect(getChord('C7b5b9').notes).toEqual(['C', 'E', 'Gb', 'Bb', 'Db']);
		expect(getChord('C7#5#9').notes).toEqual(['C', 'E', 'G#', 'Bb', 'D#']);
		expect(getChord('C7b5#9').notes).toEqual(['C', 'E', 'Gb', 'Bb', 'D#']);
		expect(getChord('C7#5b9').notes).toEqual(['C', 'E', 'G#', 'Bb', 'Db']);
	});

	it('supports add chords', () => {
		expect(getChord('Cadd2').notes).toEqual(['C', 'D', 'E', 'G']);
		expect(getChord('Cadd4').notes).toEqual(['C', 'E', 'F', 'G']);
		expect(getChord('Cadd9').notes).toEqual(['C', 'E', 'G', 'D']);
		expect(getChord('Cadd11').notes).toEqual(['C', 'E', 'G', 'F']);
		expect(getChord('Cadd13').notes).toEqual(['C', 'E', 'G', 'A']);
	});

	it('supports slash chords (chord inversions)', () => {
		expect(getChord('C/E').notes).toEqual(['E', 'G', 'C']);
		expect(getChord('C/G').notes).toEqual(['G', 'C', 'E']);
		expect(getChord('Eb/G').notes).toEqual(['G', 'Bb', 'Eb']);
		expect(getChord('Eb/Bb').notes).toEqual(['Bb', 'Eb', 'G']);
	});

	// it('supports weird chords', () => {
	// 	expect(getChord('Cø7').notes).toEqual(['C', 'Eb', 'Gb', 'Bb']);
	// });
});
