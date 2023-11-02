import { describe, expect, it } from 'vitest';
import { readAlteredNotes } from './readAlteredNotes.js';

describe('readAlteredNotes', () => {
  describe('with parenteses around all altered notes', () => {
    it('handles no notes', () => {
      expect(readAlteredNotes('A')).toBe(undefined);
      expect(readAlteredNotes('Bb7')).toBe(undefined);
      expect(readAlteredNotes('CminM7')).toStrictEqual(undefined);
    });

    it('handles a single note', () => {
      expect(readAlteredNotes('Cm(b7b5)')).toStrictEqual(['b7', 'b5']);
    });

    it('handles multiple notes', () => {
      expect(readAlteredNotes('Amaj7(#5)')).toStrictEqual(['#5']);
    });

    it('handles 7 chord from flat root note', () => {
      expect(readAlteredNotes('Ab7(#5)')).toStrictEqual(['#5']);
    });
  });

  describe('without parenteses', () => {
    it('handles a single note', () => {
      expect(readAlteredNotes('Cmb7b5')).toStrictEqual(['b7', 'b5']);
    });
    it('handles 7 chord from flat root note', () => {
      expect(readAlteredNotes('Ab7#5')).toStrictEqual(['#5']);
    });
  });
});
