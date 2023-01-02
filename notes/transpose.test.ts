import { describe, expect, it } from 'vitest';
import { transposeNote } from './transpose';

describe('transposeNote', () => {
	it('supports transposing notes by interval shorthand', () => {
		expect(transposeNote('C', 'P4')).toEqual('F');
	});

	it('chooses sharps for augmented intervals', () => {
		expect(transposeNote('C', 'A4')).toEqual('F#');
	});

	it('chooses flats for diminished intervals', () => {
		expect(transposeNote('C', 'd5')).toEqual('Gb');
	});
});
