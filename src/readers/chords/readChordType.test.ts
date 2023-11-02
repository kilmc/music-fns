import { describe, expect, it } from 'vitest';
import { readChordType } from './readChordType.js';

describe('readChordType', () => {
  it('handles second chords', () => {
    expect(readChordType('C2')).toBe('second');
  });

  it('handles triad chords', () => {
    expect(readChordType('C')).toBe('triad');
    expect(readChordType('Am')).toBe('triad');
    expect(readChordType('Bb')).toBe('triad');
    expect(readChordType('D#m')).toBe('triad');
  });

  it('handles fourth chords', () => {
    expect(readChordType('C4')).toBe('fourth');
  });

  it('handles fifth chords', () => {
    expect(readChordType('C5')).toBe('fifth');
  });

  it('handles sixth chords', () => {
    expect(readChordType('C6')).toBe('sixth');
  });

  it('handles seventh chords', () => {
    expect(readChordType('Cmaj7')).toBe('seventh');
    expect(readChordType('CM7')).toBe('seventh');
    expect(readChordType('Cmin7')).toBe('seventh');
    expect(readChordType('Cm7')).toBe('seventh');
    expect(readChordType('Ab7')).toBe('seventh');
    expect(readChordType('D#7')).toBe('seventh');
    expect(readChordType('D#m7')).toBe('seventh');
    expect(readChordType('Dmaj7')).toBe('seventh');
    expect(readChordType('Cmmaj7')).toBe('seventh');
  });

  it('handles ninth chords', () => {
    expect(readChordType('C9')).toBe('ninth');
  });

  it('handles eleventh chords', () => {
    expect(readChordType('C11')).toBe('eleventh');
  });

  it('handles thirteenth chords', () => {
    expect(readChordType('C13')).toBe('thirteenth');
  });
});
