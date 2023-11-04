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

  it('gets relative modes', () => {
    expect(getKey('C major')?.relativeModes).toStrictEqual([
      'C major',
      'D dorian',
      'E phrygian',
      'F lydian',
      'G mixolydian',
      'A minor',
      'B locrian',
    ]);

    expect(getKey('C melodic minor')?.relativeModes).toStrictEqual([
      'C melodic minor',
      'D dorian flat 2',
      'Eb lydian augmented',
      'F lydian dominant',
      'G mixolydian flat 6',
      'A aeolian flat 2',
      'B super locrian',
    ]);

    expect(getKey('C melodic minor')?.relativeModes).toStrictEqual([
      'C melodic minor',
      'D dorian flat 2',
      'Eb lydian augmented',
      'F lydian dominant',
      'G mixolydian flat 6',
      'A aeolian flat 2',
      'B super locrian',
    ]);
  });

  it('gets parallel modes', () => {
    expect(getKey('C major')?.parallelModes).toStrictEqual([
      'C major',
      'C dorian',
      'C phrygian',
      'C lydian',
      'C mixolydian',
      'C minor',
      'C locrian',
    ]);

    expect(getKey('C melodic minor')?.parallelModes).toStrictEqual([
      'C melodic minor',
      'C dorian flat 2',
      'C lydian augmented',
      'C lydian dominant',
      'C mixolydian flat 6',
      'C aeolian flat 2',
      'C super locrian',
    ]);

    expect(getKey('C melodic minor')?.parallelModes).toStrictEqual([
      'C melodic minor',
      'C dorian flat 2',
      'C lydian augmented',
      'C lydian dominant',
      'C mixolydian flat 6',
      'C aeolian flat 2',
      'C super locrian',
    ]);
  });
});
