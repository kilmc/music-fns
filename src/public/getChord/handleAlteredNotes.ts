import { readAlteration } from '../../readers/chords/readAlteration.js';
import { TransposedNote, transposeNote } from '../transposeNote.js';

const alterNote = (
  note: TransposedNote,
  alteration: string
): TransposedNote => {
  const { type, degree } = readAlteration(alteration);

  const newNote = transposeNote(note.midiNumber, 1, {
    direction: type !== undefined && ['m', 'd'].includes(type) ? 'down' : 'up',
  });
  const transpositionRecord = newNote?.transpositions.at(0);

  if (newNote !== undefined && transpositionRecord !== undefined) {
    transpositionRecord.type = type;
    transpositionRecord.degree = degree;

    const newTranspositions = note.transpositions.concat(transpositionRecord);

    return { ...newNote, transpositions: newTranspositions };
  } else {
    return note;
  }
};

export const handleAlteredNotes = (
  note?: TransposedNote,
  alterations?: string[]
) => {
  if (note === undefined || alterations === undefined) {
    return note;
  }

  const alteration = alterations.find((alteration) => {
    const degree = alteration.match(/\d+/)?.at(0) || '';
    return note.transpositions.at(0)?.shorthand?.includes(degree);
  });

  if (alteration === undefined) {
    return note;
  } else {
    return alterNote(note, alteration);
  }
};
