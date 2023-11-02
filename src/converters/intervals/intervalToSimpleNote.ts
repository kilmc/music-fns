import { IntervalShorthand } from '../../consts/intervals.js';
import { NoteNames, NoteType, isNoteType } from '../../consts/notes.js';
import { intervalToDegreeNote } from './intervalToDegreeNote.js';

const hasNoteType = (type: NoteType, noteNames: NoteNames) =>
  Object.keys(noteNames).includes(type);

const chooseAccurateNote = (
  intervalNoteName: string,
  noteNames: NoteNames
): {
  type?: NoteType;
  noteName?: string;
} => {
  // An accurate note will include notes like Cb or D##
  // These are technically correct but are less readible
  // than their equivalents B and E
  const [type, noteName] =
    Object.entries(noteNames).find(([_, noteName]) =>
      noteName.includes(intervalNoteName)
    ) || [];

  return {
    type: isNoteType(type) ? type : undefined,
    noteName,
  };
};

export const intervalToSimpleNote = (
  chordRoot: string,
  intervalShorthand: IntervalShorthand,
  noteNames: NoteNames
) => {
  const hasNatural = hasNoteType('natural', noteNames);
  const intervalNoteName = intervalToDegreeNote(chordRoot, intervalShorthand);
  const { type, noteName } = chooseAccurateNote(intervalNoteName, noteNames);

  if (hasNatural && type !== 'natural' && intervalShorthand !== 'P1') {
    return noteNames.natural;
  }

  return noteName;
};
