import { getScaleChords } from '../chords/getScaleChords.js';
import { modes, scaleTypes } from '../consts.js';
import { scales } from '../db/scales/allScales.js';
import { isMajor, offsetArr } from '../helper.js';
import { isScaleType } from '../modes/helpers.js';
import { extractScaleName } from '../scale/extractName.js';
import { getMajorFromMode } from '../scale/getMajorFromMode.js';
import { getFriendlyModeName } from '../scale/helpers.js';
import { scaleToPianoKeys } from '../scale/scaleToPianoKeys.js';
import type { Chord, Mode } from '../types.js';
import { getRelativeMinorName } from './helpers.js';

type ScaleNotes = {
  names: string[];
  midiKeys: number[];
};

type KeyInfo = {
  name: string;
  notes: ScaleNotes;
  major: {
    name: string;
    notes: string[];
  };
  minor: {
    name: string;
    notes: string[];
  };
  modes(name: Mode): string[];
  chords: Chord[];
};

export const getKey = (key: string): KeyInfo | undefined => {
  const [pitch, mode] = extractScaleName(key) || [];

  if (pitch === undefined && mode === undefined) return undefined;

  const friendlyModeName = getFriendlyModeName(mode);
  if (mode === undefined || pitch === undefined) return undefined;

  if (!isScaleType(friendlyModeName)) return undefined;

  const keyQuality = friendlyModeName;
  const majorPitch = isMajor(mode)
    ? pitch
    : getMajorFromMode(pitch, friendlyModeName);

  const majorScale = scales.major[majorPitch];
  const scale = offsetArr(
    majorScale.notes,
    scaleTypes.indexOf(friendlyModeName)
  );

  const notes = scaleToPianoKeys(scale).reduce<ScaleNotes>((accum, xs) => {
    accum.names ? accum.names.push(xs.note) : (accum.names = [xs.note]);
    accum.midiKeys
      ? accum.midiKeys.push(xs.midiNumber)
      : (accum.midiKeys = [xs.midiNumber]);

    return accum;
  }, {} as ScaleNotes);

  return {
    name: `${pitch} ${keyQuality}`,
    notes: notes,
    major: {
      name: `${majorPitch} major`,
      notes: majorScale.notes,
    },
    minor: {
      name: getRelativeMinorName(majorPitch),
      notes: offsetArr(majorScale.notes, 5),
    },
    modes(name: Mode) {
      return offsetArr(majorScale.notes, modes.indexOf(name));
    },
    chords: getScaleChords(scale, friendlyModeName),
  };
};
