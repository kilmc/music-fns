import { describe, expect, it } from 'vitest';
import { handleAlteredNotes } from './handleAlteredNotes.js';
import { transposeNote } from '../transposeNote.js';

describe('handleAlteredNotes', () => {
  it('handles', () => {
    const note = transposeNote('C', 'P5')!;
    expect(handleAlteredNotes(note, ['b5'])?.names.flat).toBe('Gb');
  });
});
