import { describe, expect, it } from 'vitest';
import { getEquivalentNote } from './getEquivalentNote';

describe('getEquivalentNote', () => {
	it('returns the equivalent note', () => {
		expect(getEquivalentNote('Gb')).toEqual('F#');
		expect(getEquivalentNote('Ab')).toEqual('G#');
	});

	it('returns the original note if no equivalent is found', () => {
		expect(getEquivalentNote('E')).toEqual('E');
	});
});
