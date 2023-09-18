import { describe, it, expect } from 'vitest';
import { getScaleDegrees } from './getScaleDegrees.js';

const testSet = [
  ['C major', ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii']],
  ['C dorian', ['i', 'ii', 'III', 'IV', 'v', 'vi', 'VII']],
  ['C phrygian', ['i', 'II', 'III', 'iv', 'v', 'VI', 'vii']],
  ['C lydian', ['I', 'II', 'iii', 'iv', 'V', 'vi', 'vii']],
  ['C mixolydian', ['I', 'ii', 'iii', 'IV', 'v', 'vi', 'VII']],
  ['C minor', ['i', 'ii', 'III', 'iv', 'v', 'VI', 'VII']],
  ['C locrian', ['i', 'II', 'iii', 'iv', 'V', 'VI', 'vii']],
] as const;

describe('getScaleDegrees', () => {
  it.each(testSet)('gets degrees for %s', (modeName, result) => {
    expect(getScaleDegrees(modeName)).toStrictEqual(result);
  });
});
