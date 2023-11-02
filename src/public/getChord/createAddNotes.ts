import { isIntervalShorthand } from '../../consts/intervals.js';
import { ChordInfo } from '../../readers/chords/readChord.js';
import { transposeNote } from '../transposeNote.js';

export const createAddNotes = (chord: ChordInfo) => {
  if (!chord.isAddChord) return undefined;

  const intervalSymbol = /(4|11)/.test(String(chord.addDegree)) ? 'P' : 'M';
  const addInterval = `${intervalSymbol}${chord.addDegree}`;

  return isIntervalShorthand(addInterval)
    ? transposeNote(chord.chordRoot, addInterval)
    : undefined;
};
