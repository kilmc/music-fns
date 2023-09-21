import { describe, expect, it } from 'vitest';
import { transposeNote } from './transpose.js';

describe('transposeNote', () => {
  it('supports transposing notes by interval shorthand', () => {
    expect(transposeNote('C', 'P4')).toEqual('F');
  });

  it('chooses sharps for augmented intervals', () => {
    expect(transposeNote('C', 'A4')).toEqual('F#');
  });

  it('chooses flats for diminished intervals', () => {
    expect(transposeNote('C', 'd5')).toEqual('Gb');
  });

  it('chooses a flat variant when passed the forceFlats options is true', () => {
    expect(transposeNote('C', 'm3', { forceFlat: true })).toEqual('Eb');
  });

  it('chooses a sharp variant when passed the forceSharps options is true', () => {
    expect(transposeNote('C', 'm3', { forceSharp: true })).toEqual('D#');
  });

  it('uses a scale of notes to constrain the results', () => {
    expect(
      transposeNote('C', 'P1', {
        scale: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
      })
    ).toEqual('B#');
  });
});
