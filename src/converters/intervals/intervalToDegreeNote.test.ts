import { describe, expect, it } from 'vitest';
import { intervalToDegreeNote } from './intervalToDegreeNote.js';

describe('intervalToDegreeNote', () => {
  it('handles intervals within an octave', () => {
    // A = +1
    // D = -1

    // 0 Semitones
    expect(intervalToDegreeNote('A', 'P1')).toBe('A');
    expect(intervalToDegreeNote('A', 'd2')).toBe('B');

    // 1 Semitone
    expect(intervalToDegreeNote('A', 'm2')).toBe('B');
    expect(intervalToDegreeNote('A', 'A1')).toBe('A');

    // 2 Semitones
    expect(intervalToDegreeNote('A', 'M2')).toBe('B');
    expect(intervalToDegreeNote('A', 'd3')).toBe('C');

    // 3 Semitones
    expect(intervalToDegreeNote('A', 'm3')).toBe('C');
    expect(intervalToDegreeNote('A', 'A2')).toBe('B');

    // 4 Semitones
    expect(intervalToDegreeNote('A', 'M3')).toBe('C');
    expect(intervalToDegreeNote('A', 'd4')).toBe('D');

    // 5 Semitones
    expect(intervalToDegreeNote('A', 'P4')).toBe('D');
    expect(intervalToDegreeNote('A', 'A3')).toBe('C');

    // 6 Semitones
    expect(intervalToDegreeNote('A', 'A4')).toBe('D');
    expect(intervalToDegreeNote('A', 'd5')).toBe('E');
    expect(intervalToDegreeNote('A', 'TT')).toBe('E');

    // 7 Semitones
    expect(intervalToDegreeNote('A', 'P5')).toBe('E');
    expect(intervalToDegreeNote('A', 'd6')).toBe('F');

    // 8 Semitones
    expect(intervalToDegreeNote('A', 'm6')).toBe('F');
    expect(intervalToDegreeNote('A', 'A5')).toBe('E');

    // 9 Semitones
    expect(intervalToDegreeNote('A', 'M6')).toBe('F');
    expect(intervalToDegreeNote('A', 'd7')).toBe('G');

    // 10 Semitones
    expect(intervalToDegreeNote('A', 'm7')).toBe('G');
    expect(intervalToDegreeNote('A', 'A6')).toBe('F');

    // 11 Semitones
    expect(intervalToDegreeNote('A', 'M7')).toBe('G');
    expect(intervalToDegreeNote('A', 'd8')).toBe('A');
  });

  it('handles intervals beyond an octave', () => {
    // 12 Semitones
    expect(intervalToDegreeNote('A', 'P8')).toBe('A');
    expect(intervalToDegreeNote('A', 'A7')).toBe('G');
    expect(intervalToDegreeNote('A', 'd9')).toBe('B');
  });
});
