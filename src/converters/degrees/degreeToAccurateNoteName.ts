import { NoteNames } from '../../consts/notes.js';
import { degreeToNote } from './degreeToNote.js';

export const degreeToAccurateNoteName = (
  chordRoot: string,
  degree: number,
  noteNames: NoteNames
) => {
  const degreeNoteName = degreeToNote(chordRoot, degree) || '';

  return Object.values(noteNames).find((noteName) =>
    noteName.includes(degreeNoteName)
  )!;
};
