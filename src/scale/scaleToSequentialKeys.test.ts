import { describe, expect, it } from 'vitest';
import { scaleToSequentialKeys } from './scaleToSequentialKeys.js';

describe('scaleToSequentialKeys', () => {
  it('converts an array of notes to an array of integers', () => {
    expect(
      scaleToSequentialKeys(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    ).toStrictEqual([0, 2, 4, 5, 7, 9, 11]);
  });
});
