import { ToneTypeShorthand } from './intervals.js';
import { ModeRoot } from './keys.js';

const majorModeNames = [
  'major',
  'ionian',
  'dorian',
  'phrygian',
  'lydian',
  'mixolydian',
  'minor',
  'aeolian',
  'locrian',
] as const;
export type MajorModeNames = (typeof majorModeNames)[number];

const melodicMinorModeNames = [
  'melodic minor',
  'dorian flat 2',
  'lydian augmented',
  'lydian dominant',
  'mixolydian flat 6',
  'aeolian flat 2',
  'super locrian',
] as const;
export type MelodicMinorModeNames = (typeof melodicMinorModeNames)[number];

const harmonicMinorModeNames = [
  'harmonic minor',
  'locrian natural 6',
  'ionian sharp 5',
  'dorian sharp 4',
  'phrygian dominant',
  'lydian sharp 2',
  'ultralocrian',
] as const;
export type HarmonicMinorModeNames = (typeof harmonicMinorModeNames)[number];

export const scaleTypes = [
  ...majorModeNames,
  ...melodicMinorModeNames,
  ...harmonicMinorModeNames,
  'major pentatonic',
  'major blues',
  'natural minor',
  'minor blues',
  'minor pentatonic',
  'jazz minor',
  'phrygian sharp 6',
  'overtone scale',
  'locrian natural 2',
  'altered scale',
  'ukranian dorian',
  'super locrian diminished',
  'augmented',
  'diminished',
  'half-whole diminished',
  'dominant diminished',
  'whole tone',
  'aeolian sharp 7',
  'aeolian dominant',
  'acoustic scale',
  'whole-half diminished',
  'inverted diminished',
  'fully diminished',
] as const;

export type ScaleType = (typeof scaleTypes)[number];

export function isScaleName(input?: string): input is ScaleType {
  return !!scaleTypes.find((val) => input === val);
}

export type ScaleDefinition = {
  name: ScaleType;
  modeOf?: ModeRoot;
  aliases: ScaleType[];
  intervalsByTone: ToneTypeShorthand[];
};

export const majorScaleDefinitions: ScaleDefinition[] = [
  {
    name: 'major',
    modeOf: 'major',
    aliases: ['major', 'ionian'],
    intervalsByTone: ['W', 'W', 'H', 'W', 'W', 'W', 'H'],
  },
  {
    name: 'dorian',
    modeOf: 'major',
    aliases: ['dorian'],
    intervalsByTone: ['W', 'H', 'W', 'W', 'W', 'H', 'W'],
  },
  {
    name: 'phrygian',
    modeOf: 'major',
    aliases: ['phrygian'],
    intervalsByTone: ['H', 'W', 'W', 'W', 'H', 'W', 'W'],
  },
  {
    name: 'lydian',
    modeOf: 'major',
    aliases: ['lydian'],
    intervalsByTone: ['W', 'W', 'W', 'H', 'W', 'W', 'H'],
  },
  {
    name: 'mixolydian',
    modeOf: 'major',
    aliases: ['mixolydian'],
    intervalsByTone: ['W', 'W', 'H', 'W', 'W', 'H', 'W'],
  },
  {
    name: 'minor',
    modeOf: 'major',
    aliases: ['minor', 'natural minor', 'aeolian'],
    intervalsByTone: ['W', 'H', 'W', 'W', 'H', 'W', 'W'],
  },
  {
    name: 'locrian',
    modeOf: 'major',
    aliases: ['locrian'],
    intervalsByTone: ['H', 'W', 'W', 'H', 'W', 'W', 'W'],
  },
];

export const melodicMinorScaleDefinitions: ScaleDefinition[] = [
  {
    name: 'melodic minor',
    modeOf: 'melodic minor',
    aliases: ['melodic minor', 'jazz minor'],
    intervalsByTone: ['W', 'H', 'W', 'W', 'W', 'W', 'H'],
  },
  {
    name: 'dorian flat 2',
    modeOf: 'melodic minor',
    aliases: ['dorian flat 2', 'phrygian sharp 6'],
    intervalsByTone: ['H', 'W', 'W', 'W', 'W', 'H', 'W'],
  },
  {
    name: 'lydian augmented',
    modeOf: 'melodic minor',
    aliases: ['lydian augmented'],
    intervalsByTone: ['W', 'W', 'W', 'W', 'H', 'W', 'H'],
  },
  {
    name: 'lydian dominant',
    modeOf: 'melodic minor',
    aliases: ['lydian dominant', 'acoustic scale', 'overtone scale'],
    intervalsByTone: ['W', 'W', 'W', 'H', 'W', 'H', 'W'],
  },
  {
    name: 'mixolydian flat 6',
    modeOf: 'melodic minor',
    aliases: ['mixolydian flat 6', 'aeolian dominant'],
    intervalsByTone: ['W', 'W', 'H', 'W', 'H', 'W', 'W'],
  },
  {
    name: 'aeolian flat 2',
    modeOf: 'melodic minor',
    aliases: ['locrian natural 2', 'aeolian flat 2'],
    intervalsByTone: ['W', 'H', 'W', 'H', 'W', 'W', 'W'],
  },
  {
    name: 'super locrian',
    modeOf: 'melodic minor',
    aliases: ['locrian natural 2'],
    intervalsByTone: ['H', 'W', 'H', 'W', 'W', 'W', 'W'],
  },
];

export const harmonicMinorScaleDefinitions: ScaleDefinition[] = [
  {
    name: 'harmonic minor',
    modeOf: 'harmonic minor',
    aliases: ['harmonic minor', 'aeolian sharp 7'],
    intervalsByTone: ['W', 'H', 'W', 'W', 'H', '3H', 'H'],
  },
  {
    name: 'locrian natural 6',
    modeOf: 'harmonic minor',
    aliases: ['locrian natural 6'],
    intervalsByTone: ['H', 'W', 'W', 'H', '3H', 'H', 'W'],
  },
  {
    name: 'ionian sharp 5',
    modeOf: 'harmonic minor',
    aliases: ['ionian sharp 5'],
    intervalsByTone: ['W', 'W', 'H', '3H', 'H', 'W', 'H'],
  },
  {
    name: 'dorian sharp 4',
    modeOf: 'harmonic minor',
    aliases: ['ukranian dorian', 'dorian sharp 4'],
    intervalsByTone: ['W', 'H', '3H', 'H', 'W', 'H', 'W'],
  },
  {
    name: 'phrygian dominant',
    modeOf: 'harmonic minor',
    aliases: ['phrygian dominant'],
    intervalsByTone: ['H', '3H', 'H', 'W', 'H', 'W', 'W'],
  },
  {
    name: 'lydian sharp 2',
    modeOf: 'harmonic minor',
    aliases: ['lydian sharp 2'],
    intervalsByTone: ['H', '3H', 'H', 'W', 'H', 'W', 'W'],
  },
  {
    name: 'ultralocrian',
    modeOf: 'harmonic minor',
    aliases: [
      'super locrian',
      'altered scale',
      'ultralocrian',
      'super locrian diminished',
    ],
    intervalsByTone: ['3H', 'H', 'W', 'H', 'W', 'W', 'H'],
  },
];

export const modalScaleDefinitions: Record<ModeRoot, ScaleDefinition[]> = {
  major: majorScaleDefinitions,
  'melodic minor': melodicMinorScaleDefinitions,
  'harmonic minor': harmonicMinorScaleDefinitions,
};

export const scaleDefinitions: ScaleDefinition[] = [
  ...majorScaleDefinitions,
  ...melodicMinorScaleDefinitions,
  ...harmonicMinorScaleDefinitions,
  {
    name: 'minor pentatonic',
    aliases: ['minor pentatonic'],
    intervalsByTone: ['3H', 'W', 'W', '3H', 'W'],
  },
  {
    name: 'major pentatonic',
    aliases: ['major pentatonic'],
    intervalsByTone: ['W', 'W', '3H', 'W', '3H'],
  },
  {
    name: 'major blues',
    aliases: ['major blues'],
    intervalsByTone: ['W', 'H', 'H', '3H', 'W', '3H'],
  },
  {
    name: 'minor blues',
    aliases: ['minor blues'],
    intervalsByTone: ['3H', 'W', 'H', 'H', '3H', 'W'],
  },
  {
    name: 'augmented',
    aliases: ['augmented'],
    intervalsByTone: ['3H', 'H', '3H', 'H', '3H', 'H'],
  },
  {
    name: 'diminished',
    aliases: ['diminished', 'dominant diminished', 'half-whole diminished'],
    intervalsByTone: ['H', 'W', 'H', 'W', 'H', 'W', 'H', 'W'],
  },
  {
    name: 'whole-half diminished',
    aliases: [
      'whole-half diminished',
      'inverted diminished',
      'fully diminished',
    ],
    intervalsByTone: ['W', 'H', 'W', 'H', 'W', 'H', 'W', 'H'],
  },
  {
    name: 'whole tone',
    aliases: ['whole tone'],
    intervalsByTone: ['W', 'W', 'W', 'W', 'W', 'W'],
  },
];

// const thingy = [
// {names: ['Acoustic scale or Lydian dominant scale'], degrees: ['1','2','3','#4','5','6','b7'],	intervalsByTone:	['W','W','W','H','W','H','W',]},
// {names: ['Aeolian mode or natural minor scale'], degrees: [ '1', '2', 'b3', '4', '5', 'b6', 'b7'],	intervalsByTone:	['W','H','W','W','H','W','W',]},
// {names: ['Algerian scale'], degrees: ['1','2','b3','#4','5','b6','7'],	intervalsByTone:	['W','H','3H','H','H','3H','H','W','H','W',]},
// {names: ['Altered scale or Super Locrian scale'], degrees: [1 ♭2 ♭3 ♭4 ♭5 ♭6 ♭7],	intervalsByTone:	[H-W-H-W-W-W-W]},
// {names: ['Augmented scale'], degrees: [1 ♭3 3 5 ♯5 7],	intervalsByTone:	[3H-H-3H-H-3H-H]},
// {names: ['Bebop dominant scale'], degrees: [1 2 3 4 5 6 ♭7 7],	intervalsByTone:	[W-W-H-W-W-H-H-H]},
// {names: ['Blues scale'], degrees: [1 ♭3 4 ♭5 5 ♭7],	intervalsByTone:	[3H-W-H-H-3H-W]},
// {names: ['Chromatic scale'], degrees: ["1 ♯1 2 ♯2 3 4 ♯4 5 ♯5 6 ♯6 7 7 ♭7 6 ♭6 5 ♭5 4 3 ♭3 2 ♭2 1"],	intervalsByTone:	[H-H-H-H-H-H-H-H-H-H-H-H]},
// {names: ['Dorian mode'], degrees: [1 2 ♭3 4 5 6 ♭7],	intervalsByTone:	[W-H-W-W-W-H-W]},
// {names: ['Double harmonic scale'], degrees: [1 ♭2 3 4 5 ♭6 7],	intervalsByTone:	[H-3H-H-W-H-3H-H]},
// {names: ['Enigmatic scale'], degrees: [1 ♭2 3 ♯4 ♯5 ♯6 7],	intervalsByTone:	[H-3H-W-W-W-H-H]},
// {names: ['Flamenco mode'], degrees: [1 ♭2 3 4 5 ♭6 7],	intervalsByTone:	[H-3H-H-W-H-3H-H]},
// {names: ['"Gypsy" scale'], degrees: [1 2 ♭3 ♯4 5 ♭6 ♭7],	intervalsByTone:	[W-H-3H-H-H-W-W]},
// {names: ['Half diminished scale'], degrees: [1 2 ♭3 4 ♭5 ♭6 ♭7],	intervalsByTone:	[W-H-W-H-W-W-W]},
// {names: ['Harmonic major scale'], degrees: [1 2 3 4 5 ♭6 7],	intervalsByTone:	[W-W-H-W-H-3H-H]},
// {names: ['Harmonic minor scale'], degrees: [1 2 ♭3 4 5 ♭6 (♮)7],	intervalsByTone:	[W-H-W-W-H-3H-H]},
// {names: ['Hirajoshi scale'], degrees: [1 3 ♯4 5 7],	intervalsByTone:	[2W-W-H-2W-H]},
// {names: ['Hungarian "Gypsy" scale/Hungarian minor scale'], degrees: [1 2 ♭3 ♯4 5 ♭6 7],	intervalsByTone:	[W-H-3H-H-H-3H-H]},
// {names: ['Hungarian major scale'], degrees: [1 ♯2 3 ♯4 5 6 ♭7],	intervalsByTone:	[3H-H-W-H-W-H-W]},
// {names: ['In scale'], degrees: [1 ♭2 4 5 ♭6],	intervalsByTone:	[H-2W-W-H-2W]},
// {names: ['Insen scale'], degrees: [1 ♭2 4 5 ♭7],	intervalsByTone:	[H-2W-W-3H-W]},
// {names: ['Ionian mode or major scale'], degrees: [1 2 3 4 5 6 7],	intervalsByTone:	[W-W-H-W-W-W-H]},
// {names: ['Istrian scale'], degrees: [1 ♭2 ♭3 ♭4 ♭5 5],	intervalsByTone:	[H-W-H-W-H-5H]},
// {names: ['Iwato scale'], degrees: [1 ♭2 4 ♭5 ♭7],	intervalsByTone:	[H-2W-H-2W-W]},
// {names: ['Locrian mode'], degrees: [1 ♭2 ♭3 4 ♭5 ♭6 ♭7],	intervalsByTone:	[H-W-W-H-W-W-W]},
// {names: ['Lydian augmented scale'], degrees: [1 2 3 ♯4 ♯5 6 7],	intervalsByTone:	[W-W-W-W-H-W-H]},
// {names: ['Lydian diminished scale'], degrees: [1 2 ♭3 ♯4 5 6 7],	intervalsByTone:	[W-H-3H-H-H-W-H]},
// {names: ['Lydian mode'], degrees: [1 2 3 ♯4 5 6 7],	intervalsByTone:	[W-W-W-H-W-W-H]},
// {names: ['Major bebop scale'], degrees: [1 2 3 4 5 (♯5/♭6) 6 7],	intervalsByTone:	[W-W-H-W-(H-H)-W-H]},
// {names: ['Major Locrian scale'], degrees: [1 2 3 4 ♭5 ♭6 ♭7],	intervalsByTone:	[W-W-H-H-W-W-W]},
// {names: ['Major pentatonic scale'], degrees: [1 2 3 5 6],	intervalsByTone:	[W-W-3H-W-3H]},
// {names: ['Melodic minor scale'], degrees: [1 2 ♭3 4 5 ♮6 ♮7 8 ♭7 ♭6 5 4 ♭3 2 1],	intervalsByTone:	["W-H-W-W-W-W-H (ascending) W-W-H-W-W-H-W (descending)""]},
// {names: ['Melodic minor scale (ascending)'], degrees: [1 2 ♭3 4 5 6 7],	intervalsByTone:	[W-H-W-W-W-W-H]},
// {names: ['Minor pentatonic scale'], degrees: [1 ♭3 4 5 ♭7],	intervalsByTone:	[3H-W-W-3H-W]},
// {names: ['Mixolydian mode or Adonai malakh mode'], degrees: [1 2 3 4 5 6 ♭7],	intervalsByTone:	[W-W-H-W-W-H-W]},
// {names: ['Neapolitan major scale'], degrees: [1 ♭2 ♭3 4 5 6 7],	intervalsByTone:	[H-W-W-W-W-W-H]},
// {names: ['Neapolitan minor scale'], degrees: [1 ♭2 ♭3 4 5 ♭6 7],	intervalsByTone:	[H-W-W-W-H-3H-H]},
// {names: ['Octatonic scale'], degrees: ["1 2 ♭3 4 ♭5 ♭6 6 7 1 ♭2 ♭3 3 ♯4 5 6 ♭7"],	intervalsByTone:	["W-H-W-H-W-H-W-H H-W-H-W-H-W-H-W"]},
// {names: ['Persian scale'], degrees: [1 ♭2 3 4 ♭5 ♭6 7],	intervalsByTone:	[H-3H-H-H-W-3H-H]},
// {names: ['Phrygian dominant scale'], degrees: [1 ♭2 3 4 5 ♭6 ♭7],	intervalsByTone:	[H-3H-H-W-H-W-W]},
// {names: ['Phrygian mode'], degrees: [1 ♭2 ♭3 4 5 ♭6 ♭7],	intervalsByTone:	[H-W-W-W-H-W-W]},
// {names: ['Prometheus scale'], degrees: [1 2 3 ♯4 6 ♭7],	intervalsByTone:	[W-W-W-3H-H-W]},
// {names: ['Scale of harmonics'], degrees: [1 ♭3 3 4 5 6],	intervalsByTone:	[3H-H-H-W-W-3H]},
// {names: ['Tritone scale'], degrees: [1 ♭2 3 ♭5 5 ♭7],	intervalsByTone:	[H-3H-W-H-3H-W]},
// {names: ['Two-semitone tritone scale'], degrees: [1 ♭2 ♮2 ♯4 5 ♭6],	intervalsByTone:	[H-H-4H-H-H-4H]},
// {names: ['Ukrainian Dorian scale'], degrees: [1 2 ♭3 ♯4 5 6 ♭7],	intervalsByTone:	[W-H-3H-H-W-H-W]},
// {names: ['Whole tone scale'], degrees: [1 2 3 ♯4 ♯5 ♯6],	intervalsByTone:	[W-W-W-W-W-W]},
// {names: ['Yo scale'], degrees: [1 ♭3 4 5 ♭7],	intervalsByTone:	[3H-W-W-3H-W]},
// ]
