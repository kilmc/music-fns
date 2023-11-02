import { describe, expect, it } from 'vitest';
import { degreeToNote } from './degreeToNote.js';

describe('degreeToNote', () => {
  it('handles with an octave', () => {
    expect(degreeToNote('C', 1)).toBe('C');
    expect(degreeToNote('C', 2)).toBe('D');
    expect(degreeToNote('C', 3)).toBe('E');
    expect(degreeToNote('C', 5)).toBe('G');
  });

  it('handles beyond an octave', () => {
    expect(degreeToNote('C', 9)).toBe('D');
    expect(degreeToNote('C', 11)).toBe('F');
    expect(degreeToNote('C', 13)).toBe('A');
  });
});
