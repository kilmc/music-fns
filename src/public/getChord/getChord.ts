import { handleAlteredNotes } from './handleAlteredNotes.js';
import { chordInfoToBaseIntervals } from '../../converters/chords/chordInfoToBaseIntervals.js';
import { createAddNotes } from './createAddNotes.js';
import { createAlteredNotes } from './createAlteredNotes.js';
import { readChord } from '../../readers/chords/readChord.js';
import { transposeNote } from '../transposeNote.js';
import { IntervalShorthand } from '../../consts/intervals.js';
import { handleSusNotes } from './handleSusNotes.js';
import { transposedChordNotesToNotes } from '../../converters/chords/transposedChordNotesToNotes.js';
import { Note } from '../../consts/notes.js';
import { isSupportedChord } from '../../readers/chords/isSupportedChord.js';

export type Chord = {
  name: string;
  notes: Note[];
  romanNumeral?: string;
};

export const emptyChord: Chord = {
  name: 'Chord not found',
  notes: [{ name: 'X', midiNumber: 0 }],
};

export const getChord = (input: string): Chord | undefined => {
  if (!isSupportedChord(input)) return undefined;

  const chord = readChord(input);

  if (chord.quality === undefined) return undefined;
  if (chord.type === undefined) return undefined;

  const root: IntervalShorthand = 'P1';
  const baseIntervals = chordInfoToBaseIntervals(chord);

  let notes = [root, ...baseIntervals]
    .flatMap((x) => x)
    .map((interval) => transposeNote(chord.chordRoot, interval))
    .map((note) => handleSusNotes(chord, note))
    .map((note) => handleAlteredNotes(note, chord.alteredNotes))
    .filter(Boolean);

  const addNotes = createAddNotes(chord);
  if (addNotes !== undefined) notes.push(addNotes);

  const extraAlteredNotes = createAlteredNotes(notes, chord);
  if (extraAlteredNotes !== undefined) notes.push(...extraAlteredNotes);

  return {
    name: input,
    notes: transposedChordNotesToNotes(notes, chord.chordRoot),
  };
};
