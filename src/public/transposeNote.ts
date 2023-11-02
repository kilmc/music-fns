import {
  Interval,
  IntervalShorthand,
  IntervalShorthandType,
  isIntervalShorthand,
} from '../consts/intervals.js';
import { NoteDefinition, noteDefinitions } from '../consts/notes.js';
import { intervalToSemitones } from '../converters/intervals/intervalToSemitones.js';
import { readIntervalShorthand } from '../readers/readIntervalShorthand.js';

type TransposeOptions = {
  direction: 'up' | 'down';
};

const defaultOptions: TransposeOptions = {
  direction: 'up',
};

type TranspositionInfo = {
  originNote: {
    name?: string;
    midiNumber?: number;
  };
  semitones: number;
  shorthand?: IntervalShorthand;
  degree?: number;
  type?: IntervalShorthandType;
};

export type TransposedNote = NoteDefinition & {
  transpositions: TranspositionInfo[];
};

const noteToNoteIndex = (note: string | number) => {
  if (typeof note === 'number') {
    return noteDefinitions.findIndex((n) => n.midiNumber % 12 === note % 12);
  } else {
    return noteDefinitions.findIndex((n) =>
      Object.values(n.names).includes(note)
    );
  }
};

export const transposeNote = (
  note: string | number | undefined,
  interval: Interval,
  options: TransposeOptions = defaultOptions
): TransposedNote | undefined => {
  if (note === undefined) return undefined;

  const startIndex = noteToNoteIndex(note);
  const semitones = intervalToSemitones(interval);

  const endIndex =
    options.direction === 'up'
      ? startIndex + semitones
      : startIndex - semitones;

  const crossesOctave = Math.abs(endIndex) >= noteDefinitions.length;
  const adjustedSemitone = crossesOctave
    ? endIndex % noteDefinitions.length
    : endIndex;
  const transposedNoteInfo = noteDefinitions.at(adjustedSemitone);

  if (transposedNoteInfo === undefined) return;

  let adjustedMidiNumber = transposedNoteInfo.midiNumber;

  // Adjust midiNumber for Octave jump
  if (crossesOctave) {
    adjustedMidiNumber =
      options.direction === 'up'
        ? transposedNoteInfo.midiNumber + noteDefinitions.length
        : transposedNoteInfo.midiNumber - noteDefinitions.length;
  }

  const isShorthand = isIntervalShorthand(interval);
  const { type, degree } = readIntervalShorthand(
    isShorthand ? interval : undefined
  );

  const result: TransposedNote = {
    ...transposedNoteInfo,
    midiNumber: adjustedMidiNumber,
    transpositions: [
      {
        originNote: {
          name: typeof note === 'string' ? note : undefined,
          midiNumber: typeof note === 'number' ? note : undefined,
        },
        semitones,
        shorthand: isShorthand ? interval : undefined,
        type: type,
        degree,
      },
    ],
  };

  return result;
};
