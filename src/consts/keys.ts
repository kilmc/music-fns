import { ChordQuality } from './chords.js';

export const keyTypes = ['major', 'melodic minor', 'harmonic minor'] as const;
export type ModeRoot = (typeof keyTypes)[number];

export const keyChordQualitiesMap: Record<ModeRoot, ChordQuality[]> = {
  major: ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'],
  'melodic minor': [
    'minor',
    'minor',
    'augmented',
    'major',
    'major',
    'diminished',
    'diminished',
  ],
  'harmonic minor': [
    'minor',
    'diminished',
    'augmented',
    'minor',
    'major',
    'major',
    'diminished',
  ],
};

export const circleOfFifthNotes = [
  'C',
  'G',
  'D',
  'A',
  'E',
  'B',
  'Gb',
  'Db',
  'Ab',
  'Eb',
  'Bb',
  'F',
];
