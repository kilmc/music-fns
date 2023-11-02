export const toneTypeShorthands = ['H', 'W', '3H'] as const;
export type ToneTypeShorthand = (typeof toneTypeShorthands)[number];
export const toneTypeShorthandMap: Record<ToneTypeShorthand, number> = {
  H: 1,
  W: 2,
  '3H': 3,
};

const intervalShorthandTypes = ['P', 'm', 'M', 'd', 'A'] as const;
export type IntervalShorthandType = (typeof intervalShorthandTypes)[number];
export function isIntervalShorthandType(
  input?: string
): input is IntervalShorthandType {
  return !!intervalShorthandTypes.find((val) => {
    return input === val;
  });
}

const intervalShorthands = [
  'd2',
  'P1',
  'A1',
  'd3',
  'm2',
  'M2',
  'A2',
  'm3',
  'd4',
  'M3',
  'A3',
  'P4',
  'A4',
  'd5',
  'TT',
  'd6',
  'P5',
  'A5',
  'm6',
  'd7',
  'M6',
  'A6',
  'm7',
  'd8',
  'M7',
  'A7',
  'P8',
  'd9',
  'm9',
  'A8',
  'd10',
  'M9',
  'A9',
  'm10',
  'd11',
  'M10',
  'A10',
  'P11',
  'A11',
  'd12',
  'P12',
  'd13',
  'm13',
  'A12',
  'M13',
  'd14',
  'm14',
  'A13',
  'M14',
  'd15',
  'P15',
  'A14',
  'A15',
] as const;

export type IntervalShorthand = (typeof intervalShorthands)[number];

export function isIntervalShorthand(
  input: string | number
): input is IntervalShorthand {
  return !!intervalShorthands.find((val) => input === val);
}

type IntervalMap = {
  names: string[];
  quick: string[];
  shorthand: IntervalShorthand[];
  semitones: number;
};

export const intervals: IntervalMap[] = [
  { names: ['Root'], quick: ['1'], shorthand: ['P1', 'd2'], semitones: 0 },
  {
    names: ['Minor 2nd'],
    quick: ['b2', '#1'],
    shorthand: ['m2', 'A1'],
    semitones: 1,
  },
  {
    names: ['Major 2nd'],
    quick: ['2'],
    shorthand: ['M2', 'd3'],
    semitones: 2,
  },
  {
    names: ['Minor 3rd'],
    quick: ['b3', '#2'],
    shorthand: ['m3', 'A2'],
    semitones: 3,
  },
  {
    names: ['Major 3rd'],
    quick: ['3', 'b4'],
    shorthand: ['M3', 'd4'],
    semitones: 4,
  },
  {
    names: ['Perfect 4th'],
    quick: ['4', '#3'],
    shorthand: ['P4', 'A3'],
    semitones: 5,
  },
  {
    names: ['Tritone'],
    quick: ['#4', 'b5'],
    shorthand: ['A4', 'd5', 'TT'],
    semitones: 6,
  },
  {
    names: ['Perfect 5th'],
    quick: ['5', 'b6'],
    shorthand: ['P5', 'd6'],
    semitones: 7,
  },
  {
    names: ['Minor 6th'],
    quick: ['b6', '#5'],
    shorthand: ['m6', 'A5'],
    semitones: 8,
  },
  {
    names: ['Major 6th'],
    quick: ['6'],
    shorthand: ['M6', 'd7'],
    semitones: 9,
  },
  {
    names: ['Minor 7th'],
    quick: ['b7', '#6'],
    shorthand: ['m7', 'A6'],
    semitones: 10,
  },
  {
    names: ['Major 7th'],
    quick: ['7', 'b8'],
    shorthand: ['M7', 'd8'],
    semitones: 11,
  },
  {
    names: ['Perfect Octave'],
    quick: ['8', '#7'],
    shorthand: ['P8', 'A7', 'd9'],
    semitones: 12,
  },
  {
    names: ['Minor 9th'],
    quick: ['b9', '#8'],
    shorthand: ['m9', 'A8'],
    semitones: 13,
  },
  {
    names: ['Major 9th'],
    quick: ['9', 'b10'],
    shorthand: ['M9', 'd10'],
    semitones: 14,
  },
  {
    names: ['Minor 10th'],
    quick: ['b10', '#9'],
    shorthand: ['A9', 'm10'],
    semitones: 15,
  },
  {
    names: ['Major 10th'],
    quick: ['b11', '10'],
    shorthand: ['d11', 'M10'],
    semitones: 16,
  },
  {
    names: ['Perfect 11th'],
    quick: ['#10', '11'],
    shorthand: ['A10', 'P11'],
    semitones: 17,
  },
  {
    names: ['Sharp 11th'],
    quick: ['#11'],
    shorthand: ['A11', 'd12'],
    semitones: 18,
  },
  {
    names: ['Perfect 12th'],
    quick: ['12', 'b13'],
    shorthand: ['P12', 'd13'],
    semitones: 19,
  },
  {
    names: ['Minor 13th'],
    quick: ['b13', '#12'],
    shorthand: ['m13', 'A12'],
    semitones: 20,
  },
  {
    names: ['Major 13th'],
    quick: ['13'],
    shorthand: ['M13', 'd14'],
    semitones: 21,
  },
  {
    names: ['Minor 14th'],
    quick: ['b14', '#13'],
    shorthand: ['m14', 'A13'],
    semitones: 22,
  },
  {
    names: ['Major 14th'],
    quick: ['14', 'b15'],
    shorthand: ['M14', 'd15'],
    semitones: 23,
  },
  {
    names: ['Perfect 15th'],
    quick: ['15', '#14'],
    shorthand: ['P15', 'A14'],
    semitones: 24,
  },
  {
    names: ['Sharp 15th'],
    quick: ['#15'],
    shorthand: ['A15'],
    semitones: 25,
  },
];

export type Interval = number | IntervalShorthand;
