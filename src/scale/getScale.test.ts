import { describe, expect, it } from 'vitest';
import { getScale } from './getScale.js';

describe('getScale', () => {
  it.only('supports major scales', () => {
    expect(getScale('C major')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    expect(getScale('E major')).toEqual([
      'E',
      'F#',
      'G#',
      'A',
      'B',
      'C#',
      'D#',
    ]);
  });

  it('supports minor scales', () => {
    expect(getScale('A minor')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    expect(getScale('C# minor')).toEqual([
      'C#',
      'D#',
      'E',
      'F#',
      'G#',
      'A',
      'B',
    ]);
  });

  it('supports melodic minor scales', () => {
    expect(getScale('A melodic minor')).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F#',
      'G#',
    ]);
    expect(getScale('F melodic minor')).toEqual([
      'F',
      'G',
      'Ab',
      'Bb',
      'C',
      'D',
      'E',
    ]);
  });
  it('supports harmonic minor scales', () => {
    expect(getScale('B harmonic minor')).toEqual([
      'B',
      'C#',
      'D',
      'E',
      'F#',
      'G',
      'A#',
    ]);
  });

  describe('diatonic modes', () => {
    it('supports ionian mode', () => {
      expect(getScale('C ionian')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
    });
    it('supports dorian mode', () => {
      expect(getScale('C dorian')).toEqual([
        'C',
        'D',
        'Eb',
        'F',
        'G',
        'A',
        'Bb',
      ]);
    });
    it('supports phrygian mode', () => {
      expect(getScale('C phrygian')).toEqual([
        'C',
        'Db',
        'Eb',
        'F',
        'G',
        'Ab',
        'Bb',
      ]);
    });
    it('supports lydian mode', () => {
      expect(getScale('C lydian')).toEqual([
        'C',
        'D',
        'E',
        'F#',
        'G',
        'A',
        'B',
      ]);
    });
    it('supports mixolydian mode', () => {
      expect(getScale('C mixolydian')).toEqual([
        'C',
        'D',
        'E',
        'F',
        'G',
        'A',
        'Bb',
      ]);
    });
    it('supports aeolian mode', () => {
      expect(getScale('C aeolian')).toEqual([
        'C',
        'D',
        'Eb',
        'F',
        'G',
        'Ab',
        'Bb',
      ]);
    });
    it('supports locrian mode', () => {
      expect(getScale('C locrian')).toEqual([
        'C',
        'Db',
        'Eb',
        'F',
        'Gb',
        'Ab',
        'Bb',
      ]);
    });
  });
});
