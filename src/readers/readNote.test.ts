import { describe, expect, it } from 'vitest';
import { readNote } from './readNote.js';

const naturalNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

describe('readNote', () => {
  it.each(naturalNotes)('handles natural notes (%s)', (s) => {
    expect(readNote(s)).toStrictEqual({
      note: s,
      notePitchClass: s,
      noteAccidental: undefined,
    });
  });

  it.each([naturalNotes])('handles flat notes (%s)', (note) => {
    expect(readNote(`${note}b`)).toStrictEqual({
      note: `${note}b`,
      notePitchClass: note,
      noteAccidental: 'flat',
    });
  });

  it.each(naturalNotes)('handles %s natural', (note) => {
    expect(readNote(`${note}#`)).toStrictEqual({
      note: `${note}#`,
      notePitchClass: note,
      noteAccidental: 'sharp',
    });
  });
});
