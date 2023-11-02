import { Note } from '../../consts/notes.js';
import { TransposedNote } from '../../public/transposeNote.js';
import { degreeToAccurateNoteName } from '../degrees/degreeToAccurateNoteName.js';

const sortByDegree = (a: TransposedNote, b: TransposedNote) => {
  const aDegree = a.transpositions.at(-1)?.degree;
  const bDegree = b.transpositions.at(-1)?.degree;

  return aDegree !== undefined && bDegree !== undefined
    ? aDegree - bDegree
    : -1;
};

export const transposedChordNotesToNotes = (
  notes: TransposedNote[],
  chordRoot: string
): Note[] => {
  return notes
    .sort(sortByDegree)
    .map((note) => {
      const degree = note.transpositions.at(-1)?.degree;
      if (degree === undefined) return undefined;

      return {
        name: degreeToAccurateNoteName(chordRoot, degree, note.names),
        midiNumber: note.midiNumber,
      };
    })
    .filter(Boolean);
};
