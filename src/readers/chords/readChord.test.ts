import { describe, expect, it } from 'vitest';
import { ChordInfo, readChord } from './readChord.js';

const empty: ChordInfo = {
  input: '',
  chordRoot: '',
  rootNote: '',
  rootAccidental: undefined,
  quality: undefined,
  type: undefined,
  alteredNotes: undefined,
  isAddChord: false,
  addDegree: undefined,
  isSusChord: false,
  susDegree: undefined,
};

describe('readChord', () => {
  it('reads major chords', () => {
    expect(readChord('A')).toStrictEqual({
      ...empty,
      input: 'A',
      chordRoot: 'A',
      rootNote: 'A',
      quality: 'major',
      type: 'triad',
    });
    expect(readChord('C')).toStrictEqual({
      ...empty,
      input: 'C',
      chordRoot: 'C',
      rootNote: 'C',
      quality: 'major',
      type: 'triad',
    });
  });

  it('reads minor chords', () => {
    expect(readChord('Am')).toStrictEqual({
      ...empty,
      input: 'Am',
      chordRoot: 'A',
      rootNote: 'A',
      quality: 'minor',
      type: 'triad',
    });
  });

  it('reads augmented chords', () => {
    expect(readChord('D#aug')).toStrictEqual({
      ...empty,
      input: 'D#aug',
      chordRoot: 'D#',
      rootNote: 'D',
      rootAccidental: 'sharp',
      quality: 'augmented',
      type: 'triad',
    });
  });

  it('reads diminished chords', () => {
    expect(readChord('Bbdim')).toStrictEqual({
      ...empty,
      input: 'Bbdim',
      chordRoot: 'Bb',
      rootNote: 'B',
      rootAccidental: 'flat',
      quality: 'diminished',
      type: 'triad',
    });
  });

  describe('reads types', () => {
    it('second chords', () => {
      expect(readChord('A2')).toStrictEqual({
        ...empty,
        input: 'A2',
        chordRoot: 'A',
        rootNote: 'A',
        quality: 'major',
        type: 'second',
      });
    });

    it('fourth chords', () => {
      expect(readChord('Cm4')).toStrictEqual({
        ...empty,
        input: 'Cm4',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'minor',
        type: 'fourth',
      });
    });

    it('fifth chords', () => {
      expect(readChord('F#5')).toStrictEqual({
        ...empty,
        input: 'F#5',
        chordRoot: 'F#',
        rootNote: 'F',
        rootAccidental: 'sharp',
        quality: 'major',
        type: 'fifth',
      });
    });

    it('sixth chords', () => {
      expect(readChord('Bb6')).toStrictEqual({
        ...empty,
        input: 'Bb6',
        chordRoot: 'Bb',
        rootNote: 'B',
        rootAccidental: 'flat',
        quality: 'major',
        type: 'sixth',
      });
    });

    it('ninth chords', () => {
      expect(readChord('C9')).toStrictEqual({
        ...empty,
        input: 'C9',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'major',
        type: 'ninth',
      });
    });

    it('eleventh chords', () => {
      expect(readChord('C11')).toStrictEqual({
        ...empty,
        input: 'C11',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'major',
        type: 'eleventh',
      });
    });

    it('thirteenth chords', () => {
      expect(readChord('C13')).toStrictEqual({
        ...empty,
        input: 'C13',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'major',
        type: 'thirteenth',
      });
    });
  });

  describe('reads 7th chords', () => {
    it('dominant 7th', () => {
      expect(readChord('C7')).toStrictEqual({
        ...empty,
        input: 'C7',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'dominant',
        type: 'seventh',
      });
    });

    it('minor major 7th', () => {
      expect(readChord('CminM7')).toStrictEqual({
        ...empty,
        input: 'CminM7',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'minor-major',
        type: 'seventh',
      });
    });

    it('diminished 7th', () => {
      expect(readChord('Cdim7')).toStrictEqual({
        ...empty,
        input: 'Cdim7',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'diminished',
        type: 'seventh',
      });
    });
  });

  describe('reads add chords', () => {
    it('add2', () => {
      expect(readChord('Cadd2')).toStrictEqual({
        ...empty,
        input: 'Cadd2',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'major',
        type: 'triad',
        isAddChord: true,
        addDegree: 2,
      });
    });

    it('add4', () => {
      expect(readChord('Badd4')).toStrictEqual({
        ...empty,
        input: 'Badd4',
        chordRoot: 'B',
        rootNote: 'B',
        quality: 'major',
        type: 'triad',
        isAddChord: true,
        addDegree: 4,
      });
    });
  });

  describe('reads sus chords', () => {
    it('sus2', () => {
      expect(readChord('Csus2')).toStrictEqual({
        ...empty,
        input: 'Csus2',
        chordRoot: 'C',
        rootNote: 'C',
        quality: 'major',
        type: 'triad',
        isSusChord: true,
        susDegree: 2,
      });
    });

    it('sus', () => {
      expect(readChord('Bsus')).toStrictEqual({
        ...empty,
        input: 'Bsus',
        chordRoot: 'B',
        rootNote: 'B',
        quality: 'major',
        type: 'triad',
        isSusChord: true,
        susDegree: 4,
      });
    });
  });

  describe('reads altered notes', () => {
    it('handles some notes', () => {
      expect(readChord('A7b5')).toStrictEqual({
        ...empty,
        input: 'A7b5',
        chordRoot: 'A',
        rootNote: 'A',
        quality: 'dominant',
        type: 'seventh',
        alteredNotes: ['b5'],
      });
    });
  });
});
