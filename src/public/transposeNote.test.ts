import { describe, expect, it } from 'vitest';
import { transposeNote } from './transposeNote.js';

describe('transposeNote', () => {
  describe('semitones', () => {
    describe('transposing UP by semitones', () => {
      it('supports numbers within the notes array size', () => {
        expect(transposeNote('E', 1)?.names.natural).toBe('F');
        expect(transposeNote('A', 2)?.names.natural).toBe('B');
      });

      it('supports numbers that go above the notes array size', () => {
        expect(transposeNote('B', 1)?.names.natural).toBe('C');
        expect(transposeNote('B', 5)?.names.natural).toBe('E');
      });

      it('supports values greater than an octave', () => {
        expect(transposeNote('C', 13)?.names.sharp).toBe('C#');
      });
    });

    describe('transposing DOWN by semitones', () => {
      it('supports numbers within the notes array size', () => {
        expect(transposeNote('E', 1, { direction: 'down' })?.names.flat).toBe(
          'Eb'
        );
        expect(
          transposeNote('A', 2, { direction: 'down' })?.names.natural
        ).toBe('G');
      });

      it('supports numbers that go above the notes array size', () => {
        expect(transposeNote('B', 1, { direction: 'down' })?.names.flat).toBe(
          'Bb'
        );
        expect(transposeNote('B', 5, { direction: 'down' })?.names.sharp).toBe(
          'F#'
        );
      });

      it('supports values greater than an octave', () => {
        expect(
          transposeNote('C', 13, { direction: 'down' })?.names.natural
        ).toBe('B');
      });
    });

    describe('midi', () => {
      it('returns a midiNumber for the note', () => {
        expect(transposeNote('C', 5)?.midiNumber).toBe(65);
        expect(transposeNote('F', 2)?.midiNumber).toBe(67);
      });

      it('compensates when the transposition crosses an octave', () => {
        expect(transposeNote('B', 5)?.midiNumber).toBe(76);
        expect(transposeNote('B', 5, { direction: 'down' })?.midiNumber).toBe(
          66
        );
        expect(transposeNote('C', 12, { direction: 'down' })?.midiNumber).toBe(
          48
        );
      });
    });
  });

  describe('interval notation', () => {
    it('transposes UP', () => {
      expect(transposeNote('C', 'M3')?.names.natural).toBe('E');
      expect(transposeNote('C', 'A4')?.names.sharp).toBe('F#');
    });

    it('transposes DOWN', () => {
      expect(
        transposeNote('E', 'M3', { direction: 'down' })?.names.natural
      ).toBe('C');
    });
  });
});
