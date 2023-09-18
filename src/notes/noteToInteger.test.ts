import { describe, expect, it } from 'vitest';
import { noteToInteger } from './noteToInteger.js';

describe('noteToMidi', () => {
  it('returns a midi note number when given a pitch', () => {
    expect(noteToInteger('C')).toEqual(0);
    expect(noteToInteger('D')).toEqual(2);
    expect(noteToInteger('E')).toEqual(4);
    expect(noteToInteger('F')).toEqual(5);
    expect(noteToInteger('G')).toEqual(7);
    expect(noteToInteger('A')).toEqual(9);
    expect(noteToInteger('B')).toEqual(11);
  });
});
