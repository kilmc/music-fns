import { describe, expect, it } from 'vitest';
import { accidentalSymbolToWord } from './accidentalSymbolToWord.js';

describe('accidentalSymbolToWord', () => {
  it('handles flats', () => {
    expect(accidentalSymbolToWord('b')).toBe('flat');
    expect(accidentalSymbolToWord('♭')).toBe('flat');
  });

  it('handles sharps', () => {
    expect(accidentalSymbolToWord('#')).toBe('sharp');
  });

  describe('handles non flat or sharp inputs', () => {
    it('other characters', () => {
      expect(accidentalSymbolToWord('F')).toBe(undefined);
      expect(accidentalSymbolToWord('X')).toBe(undefined);
    });

    it('empty string', () => {
      expect(accidentalSymbolToWord('')).toBe(undefined);
    });
  });
});
