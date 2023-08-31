import { getScaleChords } from '../chords/getScaleChords';
import { majorScales, modes } from '../consts';
import { isMajor, offsetArr } from '../helper';
import { getModeName } from '../modes/getName';
import { isModeName } from '../modes/helpers';
import { extractScaleName } from '../scale/extractName';
import { getMajorFromMode } from '../scale/getMajorFromMode';
import type { IChord, TMode } from '../types';
import { getRelativeMinorName } from './helpers';

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

  if (mode === undefined || pitch === undefined) {
    return;
  }

  if (!isModeName(mode)) {
    return;
  }

  const keyQuality = getModeName(mode);
  const majorPitch = isMajor(mode) ? pitch : getMajorFromMode(pitch, mode);
  const majorScale = majorScales[majorPitch];
  const scale = offsetArr(majorScale, modes.indexOf(mode));

  return {
    name: `${pitch} ${keyQuality}`,
    notes: scale,
    major: {
      name: `${majorPitch} major`,
      notes: majorScale,
    },
    minor: {
      name: getRelativeMinorName(pitch),
      notes: offsetArr(majorScale, 5),
    },
    modes(name: TMode) {
      return offsetArr(majorScale, modes.indexOf(name));
    },
    chords: getScaleChords(scale, mode),
  };
};
