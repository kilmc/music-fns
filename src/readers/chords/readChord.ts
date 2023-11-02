import { readNote } from '../readNote.js';
import { readChordQuality } from './readChordQuality.js';
import { readChordType } from './readChordType.js';
import { readAlteredNotes } from './readAlteredNotes.js';
import {
  findWeirdChordInfo,
  isWeirdChord,
} from '../../edgecases/isWeirdChord.js';
import { readAddInfo } from './readAddInfo.js';
import { readSusInfo } from './readSusInfo.js';
import { ChordQuality, ChordType } from '../../consts/chords.js';

export type ChordInfo = {
  input: string;
  chordRoot: string;
  rootNote: string;
  rootAccidental?: 'flat' | 'sharp';
  quality?: ChordQuality;
  type?: ChordType;
  alteredNotes?: string[];
  isAddChord?: boolean;
  addDegree?: number;
  isSusChord?: boolean;
  susDegree?: number;
};

const unknownChord: ChordInfo = {
  input: '',
  chordRoot: '',
  rootNote: '',
  rootAccidental: undefined,
  quality: undefined,
  type: undefined,
  alteredNotes: undefined,
  isAddChord: undefined,
  addDegree: undefined,
  isSusChord: undefined,
  susDegree: undefined,
};

const readWeirdChords = (input: string): ChordInfo => {
  const { note, notePitchClass, noteAccidental } = readNote(input);
  const weirdChordInfo = findWeirdChordInfo(input);

  if (typeof weirdChordInfo === 'object') {
    return {
      input,
      chordRoot: note,
      rootNote: notePitchClass,
      rootAccidental: noteAccidental,
      ...weirdChordInfo,
    };
  } else {
    return unknownChord;
  }
};

const readRegularChords = (input: string): ChordInfo => {
  const { note, notePitchClass, noteAccidental } = readNote(input);

  const chordType = readChordType(input);
  const chordQuality = readChordQuality(input, chordType);
  const alteredNotes = readAlteredNotes(input);
  const addInfo = readAddInfo(input);
  const susInfo = readSusInfo(input);

  return {
    input,
    chordRoot: note,
    rootNote: notePitchClass,
    rootAccidental: noteAccidental,
    quality: chordQuality,
    type: chordType,
    alteredNotes: alteredNotes,
    ...addInfo,
    ...susInfo,
  };
};

export const readChord = (input: string): ChordInfo => {
  if (isWeirdChord(input)) {
    return readWeirdChords(input);
  } else {
    return readRegularChords(input);
  }
};
