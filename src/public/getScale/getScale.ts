import { ModeRoot } from '../../consts/keys.js';
import { Note } from '../../consts/notes.js';
import { ScaleType, scaleDefinitions } from '../../consts/scales.js';
import { degreeToAccurateNoteName } from '../../converters/degrees/degreeToAccurateNoteName.js';
import { toneIntervalsToNotes } from '../../converters/intervals/toneIntervalsToNotes.js';
import { noteToInteger } from '../../converters/notes/noteToInteger.js';
import { readScale } from '../readScale.js';
import { TransposedNote } from '../transposeNote.js';

const printScaleNote = (scaleRoot: string, notes: TransposedNote[]): Note[] => {
  return notes
    .map((note, i) => {
      return {
        name: degreeToAccurateNoteName(scaleRoot, i + 1, note.names),
        midiNumber: note.midiNumber,
      };
    })
    .filter(Boolean);
};

export type Scale = {
  name: string;
  root: string;
  type: ScaleType;
  modeOf?: ModeRoot;
  notes: Note[];
  integers: number[];
};

export const getScale = (input: string): Scale | undefined => {
  const { noteName, type } = readScale(input);

  if (type === undefined) return undefined;
  const scaleConfig = scaleDefinitions.find((config) =>
    config.aliases.includes(type)
  );

  if (scaleConfig === undefined) return undefined;
  if (noteName === undefined) return undefined;

  const notes = toneIntervalsToNotes(scaleConfig.intervalsByTone, noteName);
  const printedNotes = printScaleNote(noteName, notes);
  const integers = printedNotes.map((pn) => noteToInteger(pn.name));

  return {
    name: `${noteName} ${type}`,
    root: noteName,
    type: type,
    modeOf: scaleConfig.modeOf,
    notes: printedNotes,
    integers,
  };
};
