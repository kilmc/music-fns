import { describe, expect, it } from 'vitest';
import { guessKey } from './guessKey.js';

describe('guessKey', () => {
  it('handles basics', () => {
    expect(guessKey(['C', 'D', 'E', 'F', 'G', 'A', 'B'], [])).toStrictEqual([
      'C major',
      'B# major',
    ]);
  });

  it('handles melodic minor', () => {
    expect(guessKey(['A', 'B', 'C', 'D', 'E', 'F#', 'G#'], [])).toStrictEqual([
      'A melodic minor',
    ]);
  });

  it('handles included and excluded notes', () => {
    expect(
      guessKey(['C#', 'D#', 'E'], ['C', 'D', 'F', 'G', 'A'])
    ).toStrictEqual(['B major', 'Cb major']);
  });
});
