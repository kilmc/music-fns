import { isIntervalShorthand } from '../../consts/intervals.js';
import { readAlteration } from '../../readers/chords/readAlteration.js';
import { ChordInfo } from '../../readers/chords/readChord.js';
import { TransposedNote, transposeNote } from '../transposeNote.js';

export const createAlteredNotes = (
  notes: TransposedNote[],
  chord: ChordInfo
) => {
  const { alteredNotes, chordRoot } = chord;
  if (alteredNotes === undefined) return undefined;

  return alteredNotes
    ?.map((alteredNote) => {
      const { type, degree } = readAlteration(alteredNote);
      const isAdditionalNote = !notes
        .flatMap((note) => note.transpositions.map((t) => t.degree))
        .includes(degree);

      if (isAdditionalNote) {
        const newInterval = `${type}${degree}`;
        if (isIntervalShorthand(newInterval)) {
          return transposeNote(chordRoot, newInterval);
        }
      }
    })
    .filter(Boolean);
};
