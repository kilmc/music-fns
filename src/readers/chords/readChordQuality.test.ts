import { describe, expect, it } from 'vitest';
import { readChordQuality } from './readChordQuality.js';

describe('readChordQuality', () => {
  it('handles major', () => {
    expect(readChordQuality('A')).toBe('major');
    expect(readChordQuality('C')).toBe('major');
    expect(readChordQuality('E')).toBe('major');
  });

  it('handles minor', () => {
    expect(readChordQuality('Am')).toBe('minor');
    expect(readChordQuality('C-')).toBe('minor');
    expect(readChordQuality('Emin')).toBe('minor');
  });

  it('handles diminished', () => {
    expect(readChordQuality('Adim')).toBe('diminished');
    expect(readChordQuality('Bb°')).toBe('diminished');
  });

  it('handles augmented', () => {
    expect(readChordQuality('Caug')).toBe('augmented');
    expect(readChordQuality('G+')).toBe('augmented');
  });

  it('handles half-diminished', () => {
    expect(readChordQuality('Cø')).toBe('half-diminished');
    expect(readChordQuality('Gm7b5')).toBe('half-diminished');
  });

  it('handles dominant', () => {
    expect(readChordQuality('C7', 'seventh')).toBe('dominant');
    expect(readChordQuality('F#7', 'seventh')).toBe('dominant');
  });
});
