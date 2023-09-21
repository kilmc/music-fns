import { describe, expect, it } from 'vitest';
import {
  getEquivalentNote,
  getWhiteNoteEquivalent,
} from './getEquivalentNote.js';

describe('getEquivalentNote', () => {
  it('returns the equivalent note', () => {
    expect(getEquivalentNote('Gb')).toEqual('F#');
    expect(getEquivalentNote('Ab')).toEqual('G#');
    expect(getEquivalentNote('B')).toEqual('Cb');
    expect(getEquivalentNote('C')).toEqual('B#');
    expect(getEquivalentNote('E')).toEqual('Fb');
    expect(getEquivalentNote('F')).toEqual('E#');
  });

  it('returns the original note if no equivalent is found', () => {
    expect(getEquivalentNote('A')).toEqual('A');
    expect(getEquivalentNote('D')).toEqual('D');
    expect(getEquivalentNote('G')).toEqual('G');
  });
});

describe('getWhiteNoteEquivalent', () => {
  it('returns an equivalent note for white notes', () => {
    expect(getWhiteNoteEquivalent('Cb')).toEqual('B');
    expect(getWhiteNoteEquivalent('Fb')).toEqual('E');
    expect(getWhiteNoteEquivalent('E#')).toEqual('F');
    expect(getWhiteNoteEquivalent('B#')).toEqual('C');
    expect(getWhiteNoteEquivalent('B')).toEqual('Cb');
    expect(getWhiteNoteEquivalent('E')).toEqual('Fb');
    expect(getWhiteNoteEquivalent('F')).toEqual('E#');
    expect(getWhiteNoteEquivalent('C')).toEqual('B#');
  });
});
