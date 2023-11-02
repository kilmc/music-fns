import { describe, expect, it } from 'vitest';
import { notesToToneShorthand } from './notesToToneShorthand.js';

describe('notesToToneShorthand', () => {
  it('handles major scales', () => {
    expect(
      notesToToneShorthand(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    ).toStrictEqual(['W', 'W', 'H', 'W', 'W', 'W', 'H']);
  });

  it('handles major modes', () => {
    expect(
      notesToToneShorthand(['D', 'E', 'F', 'G', 'A', 'B', 'C'])
    ).toStrictEqual(['W', 'H', 'W', 'W', 'W', 'H', 'W']);
  });
});
