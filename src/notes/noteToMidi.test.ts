import { describe, expect, it } from 'vitest';
import { midiToNote, noteToMidi } from './noteToMidi.js';

describe('noteToMidi', () => {
  it('returns a midi note number when given a pitch', () => {
    expect(noteToMidi('C-1')).toEqual(0);
    expect(noteToMidi('C4')).toEqual(60);
    expect(noteToMidi('G9')).toEqual(127);
    expect(noteToMidi('Ab2')).toEqual(44);
    expect(noteToMidi('G#2')).toEqual(44);
  });
});

describe('midiToNote', () => {
  it('returns a pitch when given a midi note number', () => {
    expect(midiToNote(0)).toEqual(['C', 'B#']);
    expect(midiToNote(60)).toEqual(['C', 'B#']);
    expect(midiToNote(127)).toEqual(['G']);
    expect(midiToNote(44)).toEqual(['G#', 'Ab']);
  });
});
