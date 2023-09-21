import { describe, it, expect } from 'vitest';
import { getKey } from './getKey.js';

describe('getKey', () => {
  it('gets Major keys', () => {
    const result = getKey('C major');
    const majorNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const minorNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const chordNames = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];

    expect(result?.name).toEqual('C major');
    expect(result?.notes.names).toEqual(majorNotes);
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Ionian modes', () => {
    const result = getKey('C ionian');
    const majorNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const minorNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const chordNames = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];

    expect(result?.name).toEqual('C major');
    expect(result?.notes.names).toEqual(majorNotes);
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Dorian modes', () => {
    const result = getKey('C dorian');
    const scaleNotes = ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'];
    const majorNotes = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
    const minorNotes = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'];
    const chordNames = ['Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim', 'Bb'];

    expect(result?.name).toEqual('C dorian');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('Bb major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('G minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Phrygian modes', () => {
    const result = getKey('C phrygian');
    const scaleNotes = ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'];
    const majorNotes = ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'];
    const minorNotes = ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
    const chordNames = ['Cm', 'Db', 'Eb', 'Fm', 'Gdim', 'Ab', 'Bbm'];

    expect(result?.name).toEqual('C phrygian');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('Ab major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('F minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Lydian modes', () => {
    const result = getKey('C lydian');
    const scaleNotes = ['C', 'D', 'E', 'F#', 'G', 'A', 'B'];
    const majorNotes = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
    const minorNotes = ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
    const chordNames = ['C', 'D', 'Em', 'F#dim', 'G', 'Am', 'Bm'];

    expect(result?.name).toEqual('C lydian');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('G major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('E minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Mixolydian modes', () => {
    const result = getKey('C mixolydian');
    const scaleNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'];
    const majorNotes = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'];
    const minorNotes = ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'];
    const chordNames = ['C', 'Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb'];

    expect(result?.name).toEqual('C mixolydian');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('F major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('D minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Minor modes', () => {
    const result = getKey('C minor');
    const scaleNotes = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
    const majorNotes = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
    const minorNotes = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
    const chordNames = ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'];

    expect(result?.name).toEqual('C minor');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('Eb major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('C minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Aeolian modes', () => {
    const result = getKey('C aeolian');
    const scaleNotes = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
    const majorNotes = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
    const minorNotes = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
    const chordNames = ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'];

    expect(result?.name).toEqual('C minor');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('Eb major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('C minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });

  it('gets Locrian modes', () => {
    const result = getKey('C locrian');
    const scaleNotes = ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'];
    const majorNotes = ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'];
    const minorNotes = ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'];
    const chordNames = ['Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm'];

    expect(result?.name).toEqual('C locrian');
    expect(result?.notes.names).toEqual(scaleNotes);
    expect(result?.major.name).toEqual('Db major');
    expect(result?.major.notes).toEqual(majorNotes);
    expect(result?.minor.name).toEqual('Bb minor');
    expect(result?.minor.notes).toEqual(minorNotes);
    expect(result?.chords.map((chord) => chord.name)).toEqual(chordNames);
  });
});
