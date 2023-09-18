import { getScaleChords } from '../chords/getScaleChords.js';
import { modes, scaleTypes } from '../consts.js';
import { scales } from '../db/scales/allScales.js';
import { isMajor, offsetArr } from '../helper.js';
import { isScaleType } from '../modes/helpers.js';
import { extractScaleName } from '../scale/extractName.js';
import { getMajorFromMode } from '../scale/getMajorFromMode.js';
import { getFriendlyModeName } from '../scale/helpers.js';
import type { IChord, TMode } from '../types.js';
import { getRelativeMinorName } from './helpers.js';

type KeyInfo = {
  name: string;
  notes: string[];
  major: {
    name: string;
    notes: string[];
  };
  minor: {
    name: string;
    notes: string[];
  };
  modes(name: TMode): string[];
  chords: IChord[];
};

export const getKey = (key: string): KeyInfo | undefined => {
  const [pitch, mode] = extractScaleName(key) || [];
  const friendlyModeName = getFriendlyModeName(mode);
  if (mode === undefined || pitch === undefined) {
    return;
  }

  if (!isScaleType(friendlyModeName)) {
    return;
  }

  const keyQuality = friendlyModeName;
  const majorPitch = isMajor(mode)
    ? pitch
    : getMajorFromMode(pitch, friendlyModeName);

  const majorScale = scales.major[majorPitch];
  const scale = offsetArr(
    majorScale.notes,
    scaleTypes.indexOf(friendlyModeName)
  );

  return {
    name: `${pitch} ${keyQuality}`,
    notes: scale,
    major: {
      name: `${majorPitch} major`,
      notes: majorScale.notes,
    },
    minor: {
      name: getRelativeMinorName(pitch),
      notes: offsetArr(majorScale.notes, 5),
    },
    modes(name: TMode) {
      return offsetArr(majorScale.notes, modes.indexOf(name));
    },
    chords: getScaleChords(scale, friendlyModeName),
  };
};
