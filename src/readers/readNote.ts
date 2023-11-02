import { AccidentalWord } from '../consts/accidentals.js';
import { accidentalSymbolToWord } from '../converters/accidentals/accidentalSymbolToWord.js';
import { noteRegex } from '../consts/regexes.js';

type ReadNote = {
  note: string;
  notePitchClass: string;
  noteAccidental?: AccidentalWord;
};

export const readNote = (input: string): ReadNote => {
  const [note, notePitchClass, rawAccidental] =
    input.match(noteRegex)?.slice(0, 3) || [];

  return {
    note,
    notePitchClass,
    noteAccidental: accidentalSymbolToWord(rawAccidental),
  };
};
