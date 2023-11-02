import { describe, expect, it } from 'vitest';
import { readScale } from './readScale.js';

describe('readScale', () => {
  describe('notes', () => {
    it('handles all notes', () => {
      expect(readScale('A major').noteName).toBe('A');
      expect(readScale('Ab major').noteName).toBe('Ab');
      expect(readScale('A# major').noteName).toBe('A#');
      expect(readScale('B major').noteName).toBe('B');
      expect(readScale('C major').noteName).toBe('C');
      expect(readScale('D major').noteName).toBe('D');
      expect(readScale('E major').noteName).toBe('E');
      expect(readScale('F major').noteName).toBe('F');
    });
  });

  it('handles major modes', () => {
    expect(readScale('C ionian').type).toBe('ionian');
    expect(readScale('D dorian').type).toBe('dorian');
    expect(readScale('E phrygian').type).toBe('phrygian');
    expect(readScale('F lydian').type).toBe('lydian');
    expect(readScale('G mixolydian').type).toBe('mixolydian');
    expect(readScale('A aeolian').type).toBe('aeolian');
    expect(readScale('B locrian').type).toBe('locrian');
    expect(readScale('C melodic minor').type).toBe('melodic minor');
    expect(readScale('C natural minor').type).toBe('natural minor');
    expect(readScale('C phrygian sharp 6').type).toBe('phrygian sharp 6');
    expect(readScale('C minor blues').type).toBe('minor blues');
  });
});
