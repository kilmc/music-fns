import { describe, expect, it } from 'vitest';
import { notesToSequentialKeys } from './notesToSequentialKeys.js';

describe('notesToSequentialKeys', () => {
  it('converts an array of notes to an array of integers', () => {
    expect(
      notesToSequentialKeys(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    ).toStrictEqual([0, 2, 4, 5, 7, 9, 11]);
    expect(notesToSequentialKeys(['A', 'C', 'E'], 4)).toStrictEqual([
      69, 72, 76,
    ]);
  });
});
