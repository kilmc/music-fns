import type { majorScaleQualities, scaleIntervals } from './consts.js';

export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type IntervalQuality =
  | 'perfect'
  | 'major'
  | 'minor'
  | 'augmented'
  | 'diminished';
export type ChordQuality =
  | 'major'
  | 'minor'
  | 'augmented'
  | 'diminished'
  | 'half-diminished'
  | 'dominant';

export type Mode =
  | 'ionian'
  | 'dorian'
  | 'phrygian'
  | 'lydian'
  | 'mixolydian'
  | 'aeolian'
  | 'locrian';

export type ChordType =
  | 'second'
  | 'triad'
  | 'fourth'
  | 'fifth'
  | 'sixth'
  | 'seventh'
  | 'ninth'
  | 'eleventh'
  | 'thirteenth';

export type IntervalShorthand =
  | 'd2'
  | 'P1'
  | 'A1'
  | 'd3'
  | 'm2'
  | 'M2'
  | 'A2'
  | 'm3'
  | 'd4'
  | 'M3'
  | 'A3'
  | 'P4'
  | 'A4'
  | 'd5'
  | 'd6'
  | 'P5'
  | 'A5'
  | 'm6'
  | 'd7'
  | 'M6'
  | 'A6'
  | 'm7'
  | 'd8'
  | 'M7'
  | 'A7'
  | 'P8'
  | 'd9'
  | 'm9'
  | 'A8'
  | 'd10'
  | 'M9'
  | 'A9'
  | 'm10'
  | 'd11'
  | 'M10'
  | 'A10'
  | 'P11'
  | 'A11'
  | 'd12'
  | 'P12'
  | 'd13'
  | 'm13'
  | 'A12'
  | 'M13'
  | 'd14'
  | 'm14'
  | 'A13'
  | 'M14'
  | 'd15'
  | 'P15'
  | 'A14'
  | 'A15';

export type TScaleType = keyof typeof scaleIntervals;

export type AddType = 'add2' | 'add4' | 'add9' | 'add11' | 'add13';
export type SusType = 'sus2' | 'sus4';

export interface ChordInfo {
  name: string;
  note: string;
  quality: ChordQuality;
  type?: ChordType;
  alteredNotes?: string[];
  addType?: AddType;
  susType?: SusType;
  slashNote?: string;
  pitchClassType: NoteType;
}

export interface Chord {
  name: string;
  notes: string[];
  romanNumeral?: string;
}

export type ScaleQualities = (typeof majorScaleQualities)[number];

export type MIDINumber = Range<0, 127>;

export type NoteType = 'flat' | 'sharp' | 'natural';
