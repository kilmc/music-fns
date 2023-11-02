import { IntervalShorthand } from '../../consts/intervals.js';
import { NoteNames } from '../../consts/notes.js';
import { intervalToDegreeNote } from './intervalToDegreeNote.js';

export const intervalToAccurateNote = (
  chordRoot: string,
  intervalShorthand: IntervalShorthand,
  noteNames: NoteNames
) => {
  const intervalNoteName = intervalToDegreeNote(chordRoot, intervalShorthand);

  return Object.values(noteNames).find((noteName) =>
    noteName.includes(intervalNoteName)
  );
};
