import { describe, expect, it } from 'vitest';
import { getChord } from './getChord.js';

describe('chord', () => {
  describe('major chords', () => {
    const majorTriads = [
      { chordName: 'A', notes: ['A', 'C#', 'E'], midiNumbers: [69, 73, 76] },
      { chordName: 'BM', notes: ['B', 'D#', 'F#'], midiNumbers: [71, 75, 78] },
      { chordName: 'Cmaj', notes: ['C', 'E', 'G'], midiNumbers: [60, 64, 67] },
      { chordName: 'Cb', notes: ['Cb', 'Eb', 'Gb'], midiNumbers: [71, 75, 78] },
      { chordName: 'Db', notes: ['Db', 'F', 'Ab'], midiNumbers: [61, 65, 68] },
      { chordName: 'Eb', notes: ['Eb', 'G', 'Bb'], midiNumbers: [63, 67, 70] },
      {
        chordName: 'B#',
        notes: ['B#', 'D##', 'F##'],
        midiNumbers: [60, 64, 67],
      },
      { chordName: 'C#', notes: ['C#', 'E#', 'G#'], midiNumbers: [61, 65, 68] },
      {
        chordName: 'D#',
        notes: ['D#', 'F##', 'A#'],
        midiNumbers: [63, 67, 70],
      },
    ];
    it.each(majorTriads)(
      '$chordName major',
      ({ chordName, notes, midiNumbers }) => {
        const result = getChord(chordName);
        expect(result?.notes?.map((note) => note?.name)).toStrictEqual(notes);
        expect(result?.notes.map((note) => note.midiNumber)).toStrictEqual(
          midiNumbers
        );
      }
    );
  });

  describe('minor chords', () => {
    const minorTriads = [
      { chordName: 'Am', notes: ['A', 'C', 'E'] },
      { chordName: 'Bmin', notes: ['B', 'D', 'F#'] },
      { chordName: 'C-', notes: ['C', 'Eb', 'G'] },
      { chordName: 'Abm', notes: ['Ab', 'Cb', 'Eb'] },
      { chordName: 'Bbmin', notes: ['Bb', 'Db', 'F'] },
      { chordName: 'Cb-', notes: ['Cb', 'Ebb', 'Gb'] },
      { chordName: 'D#m', notes: ['D#', 'F#', 'A#'] },
      { chordName: 'E#min', notes: ['E#', 'G#', 'B#'] },
      { chordName: 'F#-', notes: ['F#', 'A', 'C#'] },
    ];
    it.each(minorTriads)('$chordName major', ({ chordName, notes }) => {
      expect(
        getChord(chordName)?.notes?.map((note) => note?.name)
      ).toStrictEqual(notes);
    });
  });

  describe('diminished chords', () => {
    const diminishedTriads = [
      { chordName: 'Adim', notes: ['A', 'C', 'Eb'] },
      { chordName: 'B°', notes: ['B', 'D', 'F'] },
      { chordName: 'Cdim', notes: ['C', 'Eb', 'Gb'] },
      { chordName: 'Eb°', notes: ['Eb', 'Gb', 'Bbb'] },
      { chordName: 'Fbdim', notes: ['Fb', 'Abb', 'Cbb'] },
      { chordName: 'Gb°', notes: ['Gb', 'Bbb', 'Dbb'] },
      { chordName: 'E#dim', notes: ['E#', 'G#', 'B'] },
      { chordName: 'F#°', notes: ['F#', 'A', 'C'] },
      { chordName: 'G#dim', notes: ['G#', 'B', 'D'] },
    ];
    it.each(diminishedTriads)('$chordName', ({ chordName, notes }) => {
      expect(
        getChord(chordName)?.notes?.map((note) => note?.name)
      ).toStrictEqual(notes);
    });
  });

  describe('augmented chords', () => {
    const augmentedTriads = [
      { chordName: 'Aaug', notes: ['A', 'C#', 'E#'] },
      { chordName: 'Baug', notes: ['B', 'D#', 'F##'] },
      { chordName: 'Caug', notes: ['C', 'E', 'G#'] },
      { chordName: 'Dbaug', notes: ['Db', 'F', 'A'] },
      { chordName: 'Ebaug', notes: ['Eb', 'G', 'B'] },
      { chordName: 'Fbaug', notes: ['Fb', 'Ab', 'C'] },
      { chordName: 'D#aug', notes: ['D#', 'F##', 'A##'] },
      { chordName: 'E#aug', notes: ['E#', 'G##', 'B##'] },
      { chordName: 'F#aug', notes: ['F#', 'A#', 'C##'] },
      { chordName: 'G#aug', notes: ['G#', 'B#', 'D##'] },
    ];
    it.each(augmentedTriads)('$chordName', ({ chordName, notes }) => {
      expect(
        getChord(chordName)?.notes?.map((note) => note?.name)
      ).toStrictEqual(notes);
    });
  });

  describe('seventh chords', () => {
    describe('dominant seventh', () => {
      const dominantSevenths = [
        { chordName: 'A7', notes: ['A', 'C#', 'E', 'G'] },
        { chordName: 'B7', notes: ['B', 'D#', 'F#', 'A'] },
        { chordName: 'C7', notes: ['C', 'E', 'G', 'Bb'] },
        { chordName: 'Fb7', notes: ['Fb', 'Ab', 'Cb', 'Ebb'] },
        { chordName: 'Gb7', notes: ['Gb', 'Bb', 'Db', 'Fb'] },
        { chordName: 'A#7', notes: ['A#', 'C##', 'E#', 'G#'] },
        { chordName: 'C#7', notes: ['C#', 'E#', 'G#', 'B'] },
        { chordName: 'D#7', notes: ['D#', 'F##', 'A#', 'C#'] },
      ];
      it.each(dominantSevenths)('$chordName', ({ chordName, notes }) => {
        expect(
          getChord(chordName)?.notes?.map((note) => note?.name)
        ).toStrictEqual(notes);
      });
    });

    describe('major seventh', () => {
      const majorSevenths = [
        { chordName: 'Amaj7', notes: ['A', 'C#', 'E', 'G#'] },
        { chordName: 'BM7', notes: ['B', 'D#', 'F#', 'A#'] },
        { chordName: 'CΔ7', notes: ['C', 'E', 'G', 'B'] },
        { chordName: 'Dbmaj7', notes: ['Db', 'F', 'Ab', 'C'] },
        { chordName: 'EbM7', notes: ['Eb', 'G', 'Bb', 'D'] },
        { chordName: 'FbΔ7', notes: ['Fb', 'Ab', 'Cb', 'Eb'] },
        { chordName: 'Gbmaj7', notes: ['Gb', 'Bb', 'Db', 'F'] },
        { chordName: 'A#M7', notes: ['A#', 'C##', 'E#', 'G##'] },
        { chordName: 'B#Δ7', notes: ['B#', 'D##', 'F##', 'A##'] },
      ];
      it.each(majorSevenths)('$chordName', ({ chordName, notes }) => {
        expect(
          getChord(chordName)?.notes?.map((note) => note?.name)
        ).toStrictEqual(notes);
      });
    });

    describe('minor seventh', () => {
      const minorSevenths = [
        { chordName: 'A-7', notes: ['A', 'C', 'E', 'G'] },
        { chordName: 'Bm7', notes: ['B', 'D', 'F#', 'A'] },
        { chordName: 'Cmin7', notes: ['C', 'Eb', 'G', 'Bb'] },
        { chordName: 'Db-7', notes: ['Db', 'Fb', 'Ab', 'Cb'] },
        { chordName: 'Ebm7', notes: ['Eb', 'Gb', 'Bb', 'Db'] },
        { chordName: 'Fbmin7', notes: ['Fb', 'Abb', 'Cb', 'Ebb'] },
        { chordName: 'D#-7', notes: ['D#', 'F#', 'A#', 'C#'] },
        { chordName: 'E#m7', notes: ['E#', 'G#', 'B#', 'D#'] },
        { chordName: 'F#min7', notes: ['F#', 'A', 'C#', 'E'] },
      ];
      it.each(minorSevenths)('$chordName', ({ chordName, notes }) => {
        expect(
          getChord(chordName)?.notes?.map((note) => note?.name)
        ).toStrictEqual(notes);
      });
    });

    describe('half-diminished seventh', () => {
      const halfDiminishedSevenths = [
        { chordName: 'Aø7', notes: ['A', 'C', 'Eb', 'G'] },
        { chordName: 'Am7b5', notes: ['A', 'C', 'Eb', 'G'] },
        { chordName: 'Bbø7', notes: ['Bb', 'Db', 'Fb', 'Ab'] },
        { chordName: 'Bbm7b5', notes: ['Bb', 'Db', 'Fb', 'Ab'] },
      ];
      it.each(halfDiminishedSevenths)('$chordName', ({ chordName, notes }) => {
        expect(
          getChord(chordName)?.notes?.map((note) => note?.name)
        ).toStrictEqual(notes);
      });
    });

    describe('diminished seventh', () => {
      const diminishedSevenths = [
        { chordName: 'A°7', notes: ['A', 'C', 'Eb', 'Gb'] },
        { chordName: 'Bdim7', notes: ['B', 'D', 'F', 'Ab'] },
        { chordName: 'Cmb7b5', notes: ['C', 'Eb', 'Gb', 'Bbb'] },
      ];
      it.each(diminishedSevenths)('$chordName', ({ chordName, notes }) => {
        expect(
          getChord(chordName)?.notes?.map((note) => note?.name)
        ).toStrictEqual(notes);
      });
    });

    describe.only('minor major seventh', () => {
      const diminishedSevenths = [
        { chordName: 'Cmmaj7', notes: ['C', 'Eb', 'G', 'B'] },
        { chordName: 'CmM7', notes: ['C', 'Eb', 'G', 'B'] },
        { chordName: 'CmΔ7', notes: ['C', 'Eb', 'G', 'B'] },
        { chordName: 'C-Δ7', notes: ['C', 'Eb', 'G', 'B'] },
      ];
      it.each(diminishedSevenths)('$chordName', ({ chordName, notes }) => {
        expect(
          getChord(chordName)?.notes?.map((note) => note?.name)
        ).toStrictEqual(notes);
      });
    });
  });

  describe('add chords', () => {
    const addChords = [
      { chordName: 'Cadd2', notes: ['C', 'D', 'E', 'G'] },
      { chordName: 'Cadd4', notes: ['C', 'E', 'F', 'G'] },
      { chordName: 'Cadd9', notes: ['C', 'E', 'G', 'D'] },
      { chordName: 'Cadd11', notes: ['C', 'E', 'G', 'F'] },
      { chordName: 'Cadd13', notes: ['C', 'E', 'G', 'A'] },
    ];
    it.each(addChords)('$chordName', ({ chordName, notes }) => {
      expect(
        getChord(chordName)?.notes?.map((note) => note?.name)
      ).toStrictEqual(notes);
    });
  });

  describe('sus chords', () => {
    const susChords = [
      { chordName: 'Csus2', notes: ['C', 'D', 'G'] },
      { chordName: 'Csus', notes: ['C', 'F', 'G'] },
      { chordName: 'Csus4', notes: ['C', 'F', 'G'] },
      { chordName: 'Csus9', notes: ['C', 'G', 'D'] },
    ];
    it.each(susChords)('$chordName', ({ chordName, notes }) => {
      expect(
        getChord(chordName)?.notes?.map((note) => note?.name)
      ).toStrictEqual(notes);
    });
  });

  describe('altered notes', () => {
    const alteredNotes = [
      { chordName: 'C7b9b13', notes: ['C', 'E', 'G', 'Bb', 'Db', 'Ab'] },
      { chordName: 'Cmaj7#11', notes: ['C', 'E', 'G', 'B', 'F#'] },
      { chordName: 'Cmaj7#4', notes: ['C', 'E', 'F#', 'G', 'B'] },
      {
        chordName: 'C7b9b13#11',
        notes: ['C', 'E', 'G', 'Bb', 'Db', 'F#', 'Ab'],
      },
      { chordName: 'Cmb6M7', notes: ['C', 'Eb', 'G', 'Ab', 'B'] },
      { chordName: 'A7b5', notes: ['A', 'C#', 'Eb', 'G'] },
      { chordName: 'C7b9', notes: ['C', 'E', 'G', 'Bb', 'Db'] },
      { chordName: 'C7b5', notes: ['C', 'E', 'Gb', 'Bb'] },
      { chordName: 'C7#5', notes: ['C', 'E', 'G#', 'Bb'] },
      { chordName: 'Cm7#5', notes: ['C', 'Eb', 'G#', 'Bb'] },
      { chordName: 'C7b9', notes: ['C', 'E', 'G', 'Bb', 'Db'] },
      { chordName: 'C7#9', notes: ['C', 'E', 'G', 'Bb', 'D#'] },
      { chordName: 'C7b5b9', notes: ['C', 'E', 'Gb', 'Bb', 'Db'] },
      { chordName: 'C7#5#9', notes: ['C', 'E', 'G#', 'Bb', 'D#'] },
      { chordName: 'C7b5#9', notes: ['C', 'E', 'Gb', 'Bb', 'D#'] },
      { chordName: 'C7#5b9', notes: ['C', 'E', 'G#', 'Bb', 'Db'] },
    ];

    it.each(alteredNotes)('$chordName', ({ chordName, notes }) => {
      expect(
        getChord(chordName)?.notes?.map((note) => note?.name)
      ).toStrictEqual(notes);
    });
  });

  it('handles invalid chords', () => {
    expect(getChord('Ce')).toBe(undefined);
  });
});
