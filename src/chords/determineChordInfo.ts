import { numberTypeChordMap } from '../consts.js';
import { determineNoteType } from '../notes/determineNoteType.js';
import type {
  IChordInfo,
  TAddType,
  TChordQuality,
  TChordType,
  TSusType,
} from '../types.js';
import { chordRegexp, isAddType } from './helpers.js';

const determineAlteredNotes = (alteredNotes?: string) => {
  return alteredNotes === undefined
    ? undefined
    : (alteredNotes.match(/(#|b)(?:5|7|9|11|13)/g) as string[]);
};

const determineChordQuality = (quality?: string): TChordQuality => {
  if (quality === undefined || ['Δ', 'M', 'maj'].includes(quality)) {
    return 'major';
  }

  if (quality === 'm') {
    return 'minor';
  }

  if (['dim', 'o'].includes(quality)) {
    return 'diminished';
  }

  if (['ø'].includes(quality)) {
    return 'half-diminished';
  }

  if (['aug', '+'].includes(quality)) {
    return 'augmented';
  }

  return 'major';
};

const determindChordType = (type?: string): TChordType => {
  return type === undefined ? 'triad' : numberTypeChordMap[type];
};

const determineAdd = (add?: string): TAddType | undefined => {
  return add && isAddType(add) ? add : undefined;
};

const determineSus = (sus?: string): TSusType | undefined => {
  if (sus === undefined) return undefined;
  if (['sus', 'sus4', 'sus9'].includes(sus)) return 'sus4';
  if (sus === 'sus2') return 'sus2';
  return undefined;
};

const determineSlashChord = (slashNote?: string) => {
  return slashNote?.replace('/', '');
};

export const determineChord = (name: string): IChordInfo => {
  const [note, quality, type, altered, add, sus, slashNote] =
    name.match(chordRegexp)?.slice(1) || [];

  return {
    name,
    note,
    quality: determineChordQuality(quality),
    type: determindChordType(type),
    alteredNotes: determineAlteredNotes(altered),
    addType: determineAdd(add),
    susType: determineSus(sus),
    slashNote: determineSlashChord(slashNote),
    pitchClassType: determineNoteType(name),
  };
};
