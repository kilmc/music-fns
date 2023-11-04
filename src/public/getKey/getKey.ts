import { ModeRoot } from '../../consts/keys.js';
import { Note } from '../../consts/notes.js';
import { ScaleType } from '../../consts/scales.js';
import { Chord } from '../getChord/getChord.js';
import { getParallelModeNames } from '../getScale/getParallelModeNames.js';
import { getRelativeModeNames } from '../getScale/getRelativeModeNames.js';
import { getScale } from '../getScale/getScale.js';
import { getKeyChords } from './getKeyChords.js';

export type Key = {
  name: string;
  root: string;
  type: ScaleType;
  notes: Note[];
  chords: Chord[];
  relativeModes?: string[];
  parallelModes?: string[];
  modeOf?: ModeRoot;
};

export const getKey = (input: string): Key | undefined => {
  const scale = getScale(input);
  if (scale === undefined) return undefined;

  const chords = getKeyChords(scale);
  if (chords === undefined) return undefined;

  const relativeModes = getRelativeModeNames(scale);
  const parallelModes = getParallelModeNames(scale);

  return {
    name: scale.name,
    root: scale.root,
    type: scale.type,
    notes: scale.notes,
    chords: chords,
    modeOf: scale.modeOf,
    relativeModes,
    parallelModes,
  };
};
