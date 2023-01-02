import { describe, expect, it } from 'vitest';
import { intervalToSemitone } from './intervalToSemitone';

describe('getSemitones', () => {
	it('returns a semitone value given an interval shorthand', () => {
		expect(intervalToSemitone('P8')).toEqual(12);
	});

	it('returns a semitone value between 0 and 12', () => {
		// This makes it easier to get the correct note value
		// without have to deal with octaves
		expect(intervalToSemitone('A15', true)).toEqual(1);
		expect(intervalToSemitone('P12', true)).toEqual(7);
	});
});
