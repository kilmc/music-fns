import { describe, expect, it } from 'vitest';
import { getKey } from './getKey.js';

describe('makeKey', () => {
  it('handles scale', () => {
    expect(getKey('C major')?.notes).toStrictEqual([
      { name: 'C', midiNumber: 60 },
      { name: 'D', midiNumber: 62 },
      { name: 'E', midiNumber: 64 },
      { name: 'F', midiNumber: 65 },
      { name: 'G', midiNumber: 67 },
      { name: 'A', midiNumber: 69 },
      { name: 'B', midiNumber: 71 },
    ]);

    expect(getKey('D dorian')?.notes).toStrictEqual([
      { name: 'D', midiNumber: 62 },
      { name: 'E', midiNumber: 64 },
      { name: 'F', midiNumber: 65 },
      { name: 'G', midiNumber: 67 },
      { name: 'A', midiNumber: 69 },
      { name: 'B', midiNumber: 71 },
      { name: 'C', midiNumber: 72 },
    ]);
  });

  const testAndResult = [
    {
      input: 'C major',
      chordNames: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      chordNumerals: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'],
      chordNotes: [
        ['C', 'E', 'G'],
        ['D', 'F', 'A'],
        ['E', 'G', 'B'],
        ['F', 'A', 'C'],
        ['G', 'B', 'D'],
        ['A', 'C', 'E'],
        ['B', 'D', 'F'],
      ],
    },
    {
      input: 'F# major',
      chordNames: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
      chordNumerals: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'],
      chordNotes: [
        ['F#', 'A#', 'C#'],
        ['G#', 'B', 'D#'],
        ['A#', 'C#', 'E#'],
        ['B', 'D#', 'F#'],
        ['C#', 'E#', 'G#'],
        ['D#', 'F#', 'A#'],
        ['E#', 'G#', 'B'],
      ],
    },
    {
      input: 'C lydian',
      chordNames: ['C', 'D', 'Em', 'F#dim', 'G', 'Am', 'Bm'],
      chordNumerals: ['I', 'II', 'iii', 'iv', 'V', 'vi', 'vii'],
      chordNotes: [
        ['C', 'E', 'G'],
        ['D', 'F#', 'A'],
        ['E', 'G', 'B'],
        ['F#', 'A', 'C'],
        ['G', 'B', 'D'],
        ['A', 'C', 'E'],
        ['B', 'D', 'F#'],
      ],
    },
    {
      input: 'C locrian',
      chordNames: ['Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm'],
      chordNumerals: ['i', 'II', 'iii', 'iv', 'V', 'VI', 'vii'],
      chordNotes: [
        ['C', 'Eb', 'Gb'],
        ['Db', 'F', 'Ab'],
        ['Eb', 'Gb', 'Bb'],
        ['F', 'Ab', 'C'],
        ['Gb', 'Bb', 'Db'],
        ['Ab', 'C', 'Eb'],
        ['Bb', 'Db', 'F'],
      ],
    },
  ];

  it.each(testAndResult)(
    'handles $input',
    ({ input, chordNames, chordNotes, chordNumerals }) => {
      const result = getKey(input);
      const chordNameResult = result?.chords?.map((chord) => chord?.name);
      const chordNotesResult = result?.chords?.map((chord) =>
        chord?.notes?.map((note) => note?.name)
      );
      const chordNumeralsResult = result?.chords?.map(
        (chord) => chord?.romanNumeral
      );

      expect(chordNameResult).toStrictEqual(chordNames);
      expect(chordNotesResult).toStrictEqual(chordNotes);
      expect(chordNumeralsResult).toStrictEqual(chordNumerals);
    }
  );
});
