import { describe, it, expect } from 'vitest';
import { getKey } from './getKey';

describe('getKey', () => {
	it('gets Major keys', () => {
		expect(getKey('C major')?.major.notes).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
		expect(getKey('C major')?.minor.notes).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
		expect(getKey('C major')?.chords.map((chord) => chord.name)).toEqual([
			'C',
			'Dm',
			'Em',
			'F',
			'G',
			'Am',
			'Bdim'
		]);
	});
});
