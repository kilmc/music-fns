import { IntervalShorthand } from '../../consts/intervals.js';
import { ChordInfo } from '../../readers/chords/readChord.js';
import { TransposedNote, transposeNote } from '../transposeNote.js';

export const handleSusNotes = (chord: ChordInfo, note?: TransposedNote) => {
  const isThird = note?.transpositions.at(0)?.degree === 3;

  if (chord.isSusChord && chord.susDegree !== undefined && isThird) {
    const susIntervalMap: Record<number, IntervalShorthand> = {
      2: 'M2',
      4: 'P4',
      9: 'M9',
    };

    const transposedNote = transposeNote(
      chord.chordRoot,
      susIntervalMap[chord.susDegree]
    );

    return transposedNote !== undefined ? transposedNote : note;
  } else {
    return note;
  }
};
