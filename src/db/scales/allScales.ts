export type ScaleInfo = {
  notes: string[];
  midiNumbers: number[];
  integers: number[];
};

export const major: Record<string, ScaleInfo> = {
  C: {
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    midiNumbers: [0, 2, 4, 5, 7, 9, 11],
    integers: [0, 2, 4, 5, 7, 9, 11],
  },
  F: {
    notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    midiNumbers: [5, 7, 9, 10, 12, 14, 16],
    integers: [5, 7, 9, 10, 0, 2, 4],
  },
  Bb: {
    notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    midiNumbers: [10, 12, 14, 15, 17, 19, 21],
    integers: [10, 0, 2, 3, 5, 7, 9],
  },
  Eb: {
    notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    midiNumbers: [3, 5, 7, 8, 10, 12, 14],
    integers: [3, 5, 7, 8, 10, 0, 2],
  },
  Ab: {
    notes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    midiNumbers: [8, 10, 12, 13, 15, 17, 19],
    integers: [8, 10, 0, 1, 3, 5, 7],
  },
  Db: {
    notes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    midiNumbers: [1, 3, 5, 6, 8, 10, 12],
    integers: [1, 3, 5, 6, 8, 10, 0],
  },
  Gb: {
    notes: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    midiNumbers: [6, 8, 10, 11, 13, 15, 17],
    integers: [6, 8, 10, 11, 1, 3, 5],
  },
  Cb: {
    notes: ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
    midiNumbers: [11, 13, 15, 16, 18, 20, 22],
    integers: [11, 1, 3, 4, 6, 8, 10],
  },
  G: {
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    midiNumbers: [7, 9, 11, 12, 14, 16, 18],
    integers: [7, 9, 11, 0, 2, 4, 6],
  },
  D: {
    notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    midiNumbers: [2, 4, 6, 7, 9, 11, 13],
    integers: [2, 4, 6, 7, 9, 11, 1],
  },
  A: {
    notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    midiNumbers: [9, 11, 13, 14, 16, 18, 20],
    integers: [9, 11, 1, 2, 4, 6, 8],
  },
  E: {
    notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    midiNumbers: [4, 6, 8, 9, 11, 13, 15],
    integers: [4, 6, 8, 9, 11, 1, 3],
  },
  B: {
    notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    midiNumbers: [11, 13, 15, 16, 18, 20, 22],
    integers: [11, 1, 3, 4, 6, 8, 10],
  },
  'F#': {
    notes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    midiNumbers: [6, 8, 10, 11, 13, 15, 17],
    integers: [6, 8, 10, 11, 1, 3, 5],
  },
  'C#': {
    notes: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
    midiNumbers: [1, 3, 5, 6, 8, 10, 12],
    integers: [1, 3, 5, 6, 8, 10, 0],
  },
};

export const dorian: Record<string, ScaleInfo> = {
  D: {
    notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C'],
    midiNumbers: [2, 4, 5, 7, 9, 11, 12],
    integers: [2, 4, 5, 7, 9, 11, 0],
  },
  G: {
    notes: ['G', 'A', 'Bb', 'C', 'D', 'E', 'F'],
    midiNumbers: [7, 9, 10, 12, 14, 16, 17],
    integers: [7, 9, 10, 0, 2, 4, 5],
  },
  C: {
    notes: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    midiNumbers: [0, 2, 3, 5, 7, 9, 10],
    integers: [0, 2, 3, 5, 7, 9, 10],
  },
  F: {
    notes: ['F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb'],
    midiNumbers: [5, 7, 8, 10, 12, 14, 15],
    integers: [5, 7, 8, 10, 0, 2, 3],
  },
  Bb: {
    notes: ['Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'],
    midiNumbers: [10, 12, 13, 15, 17, 19, 20],
    integers: [10, 0, 1, 3, 5, 7, 8],
  },
  Eb: {
    notes: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db'],
    midiNumbers: [3, 5, 6, 8, 10, 12, 13],
    integers: [3, 5, 6, 8, 10, 0, 1],
  },
  Ab: {
    notes: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb'],
    midiNumbers: [8, 10, 11, 13, 15, 17, 18],
    integers: [8, 10, 11, 1, 3, 5, 6],
  },
  Db: {
    notes: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb'],
    midiNumbers: [1, 3, 4, 6, 8, 10, 11],
    integers: [1, 3, 4, 6, 8, 10, 11],
  },
  A: {
    notes: ['A', 'B', 'C', 'D', 'E', 'F#', 'G'],
    midiNumbers: [9, 11, 12, 14, 16, 18, 19],
    integers: [9, 11, 0, 2, 4, 6, 7],
  },
  E: {
    notes: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
    midiNumbers: [4, 6, 7, 9, 11, 13, 14],
    integers: [4, 6, 7, 9, 11, 1, 2],
  },
  B: {
    notes: ['B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
    midiNumbers: [11, 13, 14, 16, 18, 20, 21],
    integers: [11, 1, 2, 4, 6, 8, 9],
  },
  'F#': {
    notes: ['F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
    midiNumbers: [6, 8, 9, 11, 13, 15, 16],
    integers: [6, 8, 9, 11, 1, 3, 4],
  },
  'C#': {
    notes: ['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'],
    midiNumbers: [1, 3, 4, 6, 8, 10, 11],
    integers: [1, 3, 4, 6, 8, 10, 11],
  },
  'G#': {
    notes: ['G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#'],
    midiNumbers: [8, 10, 11, 13, 15, 17, 18],
    integers: [8, 10, 11, 1, 3, 5, 6],
  },
  'D#': {
    notes: ['D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'],
    midiNumbers: [3, 5, 6, 8, 10, 12, 13],
    integers: [3, 5, 6, 8, 10, 0, 1],
  },
};

export const phrygian: Record<string, ScaleInfo> = {
  E: {
    notes: ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
    midiNumbers: [4, 5, 7, 9, 11, 12, 14],
    integers: [4, 5, 7, 9, 11, 0, 2],
  },
  A: {
    notes: ['A', 'Bb', 'C', 'D', 'E', 'F', 'G'],
    midiNumbers: [9, 10, 12, 14, 16, 17, 19],
    integers: [9, 10, 0, 2, 4, 5, 7],
  },
  D: {
    notes: ['D', 'Eb', 'F', 'G', 'A', 'Bb', 'C'],
    midiNumbers: [2, 3, 5, 7, 9, 10, 12],
    integers: [2, 3, 5, 7, 9, 10, 0],
  },
  G: {
    notes: ['G', 'Ab', 'Bb', 'C', 'D', 'Eb', 'F'],
    midiNumbers: [7, 8, 10, 12, 14, 15, 17],
    integers: [7, 8, 10, 0, 2, 3, 5],
  },
  C: {
    notes: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    midiNumbers: [0, 1, 3, 5, 7, 8, 10],
    integers: [0, 1, 3, 5, 7, 8, 10],
  },
  F: {
    notes: ['F', 'Gb', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    midiNumbers: [5, 6, 8, 10, 12, 13, 15],
    integers: [5, 6, 8, 10, 0, 1, 3],
  },
  Bb: {
    notes: ['Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
    midiNumbers: [10, 11, 13, 15, 17, 18, 20],
    integers: [10, 11, 1, 3, 5, 6, 8],
  },
  Eb: {
    notes: ['Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
    midiNumbers: [3, 4, 6, 8, 10, 11, 13],
    integers: [3, 4, 6, 8, 10, 11, 1],
  },
  B: {
    notes: ['B', 'C', 'D', 'E', 'F#', 'G', 'A'],
    midiNumbers: [11, 12, 14, 16, 18, 19, 21],
    integers: [11, 0, 2, 4, 6, 7, 9],
  },
  'F#': {
    notes: ['F#', 'G', 'A', 'B', 'C#', 'D', 'E'],
    midiNumbers: [6, 7, 9, 11, 13, 14, 16],
    integers: [6, 7, 9, 11, 1, 2, 4],
  },
  'C#': {
    notes: ['C#', 'D', 'E', 'F#', 'G#', 'A', 'B'],
    midiNumbers: [1, 2, 4, 6, 8, 9, 11],
    integers: [1, 2, 4, 6, 8, 9, 11],
  },
  'G#': {
    notes: ['G#', 'A', 'B', 'C#', 'D#', 'E', 'F#'],
    midiNumbers: [8, 9, 11, 13, 15, 16, 18],
    integers: [8, 9, 11, 1, 3, 4, 6],
  },
  'D#': {
    notes: ['D#', 'E', 'F#', 'G#', 'A#', 'B', 'C#'],
    midiNumbers: [3, 4, 6, 8, 10, 11, 13],
    integers: [3, 4, 6, 8, 10, 11, 1],
  },
  'A#': {
    notes: ['A#', 'B', 'C#', 'D#', 'E#', 'F#', 'G#'],
    midiNumbers: [10, 11, 13, 15, 17, 18, 20],
    integers: [10, 11, 1, 3, 5, 6, 8],
  },
  'E#': {
    notes: ['E#', 'F#', 'G#', 'A#', 'B#', 'C#', 'D#'],
    midiNumbers: [5, 6, 8, 10, 12, 13, 15],
    integers: [5, 6, 8, 10, 0, 1, 3],
  },
};

export const lydian: Record<string, ScaleInfo> = {
  F: {
    notes: ['F', 'G', 'A', 'B', 'C', 'D', 'E'],
    midiNumbers: [5, 7, 9, 11, 12, 14, 16],
    integers: [5, 7, 9, 11, 0, 2, 4],
  },
  Bb: {
    notes: ['Bb', 'C', 'D', 'E', 'F', 'G', 'A'],
    midiNumbers: [10, 12, 14, 16, 17, 19, 21],
    integers: [10, 0, 2, 4, 5, 7, 9],
  },
  Eb: {
    notes: ['Eb', 'F', 'G', 'A', 'Bb', 'C', 'D'],
    midiNumbers: [3, 5, 7, 9, 10, 12, 14],
    integers: [3, 5, 7, 9, 10, 0, 2],
  },
  Ab: {
    notes: ['Ab', 'Bb', 'C', 'D', 'Eb', 'F', 'G'],
    midiNumbers: [8, 10, 12, 14, 15, 17, 19],
    integers: [8, 10, 0, 2, 3, 5, 7],
  },
  Db: {
    notes: ['Db', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'],
    midiNumbers: [1, 3, 5, 7, 8, 10, 12],
    integers: [1, 3, 5, 7, 8, 10, 0],
  },
  Gb: {
    notes: ['Gb', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F'],
    midiNumbers: [6, 8, 10, 12, 13, 15, 17],
    integers: [6, 8, 10, 0, 1, 3, 5],
  },
  Cb: {
    notes: ['Cb', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
    midiNumbers: [11, 13, 15, 17, 18, 20, 22],
    integers: [11, 1, 3, 5, 6, 8, 10],
  },
  Fb: {
    notes: ['Fb', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb'],
    midiNumbers: [4, 6, 8, 10, 11, 13, 15],
    integers: [4, 6, 8, 10, 11, 1, 3],
  },
  C: {
    notes: ['C', 'D', 'E', 'F#', 'G', 'A', 'B'],
    midiNumbers: [0, 2, 4, 6, 7, 9, 11],
    integers: [0, 2, 4, 6, 7, 9, 11],
  },
  G: {
    notes: ['G', 'A', 'B', 'C#', 'D', 'E', 'F#'],
    midiNumbers: [7, 9, 11, 13, 14, 16, 18],
    integers: [7, 9, 11, 1, 2, 4, 6],
  },
  D: {
    notes: ['D', 'E', 'F#', 'G#', 'A', 'B', 'C#'],
    midiNumbers: [2, 4, 6, 8, 9, 11, 13],
    integers: [2, 4, 6, 8, 9, 11, 1],
  },
  A: {
    notes: ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
    midiNumbers: [9, 11, 13, 15, 16, 18, 20],
    integers: [9, 11, 1, 3, 4, 6, 8],
  },
  E: {
    notes: ['E', 'F#', 'G#', 'A#', 'B', 'C#', 'D#'],
    midiNumbers: [4, 6, 8, 10, 11, 13, 15],
    integers: [4, 6, 8, 10, 11, 1, 3],
  },
  B: {
    notes: ['B', 'C#', 'D#', 'E#', 'F#', 'G#', 'A#'],
    midiNumbers: [11, 13, 15, 17, 18, 20, 22],
    integers: [11, 1, 3, 5, 6, 8, 10],
  },
  'F#': {
    notes: ['F#', 'G#', 'A#', 'B#', 'C#', 'D#', 'E#'],
    midiNumbers: [6, 8, 10, 12, 13, 15, 17],
    integers: [6, 8, 10, 0, 1, 3, 5],
  },
};

export const mixolydian: Record<string, ScaleInfo> = {
  G: {
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
    midiNumbers: [7, 9, 11, 12, 14, 16, 17],
    integers: [7, 9, 11, 0, 2, 4, 5],
  },
  C: {
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'Bb'],
    midiNumbers: [0, 2, 4, 5, 7, 9, 10],
    integers: [0, 2, 4, 5, 7, 9, 10],
  },
  F: {
    notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'Eb'],
    midiNumbers: [5, 7, 9, 10, 12, 14, 15],
    integers: [5, 7, 9, 10, 0, 2, 3],
  },
  Bb: {
    notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'Ab'],
    midiNumbers: [10, 12, 14, 15, 17, 19, 20],
    integers: [10, 0, 2, 3, 5, 7, 8],
  },
  Eb: {
    notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db'],
    midiNumbers: [3, 5, 7, 8, 10, 12, 13],
    integers: [3, 5, 7, 8, 10, 0, 1],
  },
  Ab: {
    notes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'Gb'],
    midiNumbers: [8, 10, 12, 13, 15, 17, 18],
    integers: [8, 10, 0, 1, 3, 5, 6],
  },
  Db: {
    notes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb'],
    midiNumbers: [1, 3, 5, 6, 8, 10, 11],
    integers: [1, 3, 5, 6, 8, 10, 11],
  },
  Gb: {
    notes: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb'],
    midiNumbers: [6, 8, 10, 11, 13, 15, 16],
    integers: [6, 8, 10, 11, 1, 3, 4],
  },
  D: {
    notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C'],
    midiNumbers: [2, 4, 6, 7, 9, 11, 12],
    integers: [2, 4, 6, 7, 9, 11, 0],
  },
  A: {
    notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G'],
    midiNumbers: [9, 11, 13, 14, 16, 18, 19],
    integers: [9, 11, 1, 2, 4, 6, 7],
  },
  E: {
    notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D'],
    midiNumbers: [4, 6, 8, 9, 11, 13, 14],
    integers: [4, 6, 8, 9, 11, 1, 2],
  },
  B: {
    notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'],
    midiNumbers: [11, 13, 15, 16, 18, 20, 21],
    integers: [11, 1, 3, 4, 6, 8, 9],
  },
  'F#': {
    notes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E'],
    midiNumbers: [6, 8, 10, 11, 13, 15, 16],
    integers: [6, 8, 10, 11, 1, 3, 4],
  },
  'C#': {
    notes: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B'],
    midiNumbers: [1, 3, 5, 6, 8, 10, 11],
    integers: [1, 3, 5, 6, 8, 10, 11],
  },
  'G#': {
    notes: ['G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'F#'],
    midiNumbers: [8, 10, 12, 13, 15, 17, 18],
    integers: [8, 10, 0, 1, 3, 5, 6],
  },
};

export const minor: Record<string, ScaleInfo> = {
  A: {
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    midiNumbers: [9, 11, 12, 14, 16, 17, 19],
    integers: [9, 11, 0, 2, 4, 5, 7],
  },
  D: {
    notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
    midiNumbers: [2, 4, 5, 7, 9, 10, 12],
    integers: [2, 4, 5, 7, 9, 10, 0],
  },
  G: {
    notes: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
    midiNumbers: [7, 9, 10, 12, 14, 15, 17],
    integers: [7, 9, 10, 0, 2, 3, 5],
  },
  C: {
    notes: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    midiNumbers: [0, 2, 3, 5, 7, 8, 10],
    integers: [0, 2, 3, 5, 7, 8, 10],
  },
  F: {
    notes: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
    midiNumbers: [5, 7, 8, 10, 12, 13, 15],
    integers: [5, 7, 8, 10, 0, 1, 3],
  },
  Bb: {
    notes: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
    midiNumbers: [10, 12, 13, 15, 17, 18, 20],
    integers: [10, 0, 1, 3, 5, 6, 8],
  },
  Eb: {
    notes: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
    midiNumbers: [3, 5, 6, 8, 10, 11, 13],
    integers: [3, 5, 6, 8, 10, 11, 1],
  },
  Ab: {
    notes: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb'],
    midiNumbers: [8, 10, 11, 13, 15, 16, 18],
    integers: [8, 10, 11, 1, 3, 4, 6],
  },
  E: {
    notes: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
    midiNumbers: [4, 6, 7, 9, 11, 12, 14],
    integers: [4, 6, 7, 9, 11, 0, 2],
  },
  B: {
    notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
    midiNumbers: [11, 13, 14, 16, 18, 19, 21],
    integers: [11, 1, 2, 4, 6, 7, 9],
  },
  'F#': {
    notes: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
    midiNumbers: [6, 8, 9, 11, 13, 14, 16],
    integers: [6, 8, 9, 11, 1, 2, 4],
  },
  'C#': {
    notes: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
    midiNumbers: [1, 3, 4, 6, 8, 9, 11],
    integers: [1, 3, 4, 6, 8, 9, 11],
  },
  'G#': {
    notes: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
    midiNumbers: [8, 10, 11, 13, 15, 16, 18],
    integers: [8, 10, 11, 1, 3, 4, 6],
  },
  'D#': {
    notes: ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
    midiNumbers: [3, 5, 6, 8, 10, 11, 13],
    integers: [3, 5, 6, 8, 10, 11, 1],
  },
  'A#': {
    notes: ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
    midiNumbers: [10, 12, 13, 15, 17, 18, 20],
    integers: [10, 0, 1, 3, 5, 6, 8],
  },
};

export const locrian: Record<string, ScaleInfo> = {
  B: {
    notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
    midiNumbers: [11, 12, 14, 16, 17, 19, 21],
    integers: [11, 0, 2, 4, 5, 7, 9],
  },
  E: {
    notes: ['E', 'F', 'G', 'A', 'Bb', 'C', 'D'],
    midiNumbers: [4, 5, 7, 9, 10, 12, 14],
    integers: [4, 5, 7, 9, 10, 0, 2],
  },
  A: {
    notes: ['A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'],
    midiNumbers: [9, 10, 12, 14, 15, 17, 19],
    integers: [9, 10, 0, 2, 3, 5, 7],
  },
  D: {
    notes: ['D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'],
    midiNumbers: [2, 3, 5, 7, 8, 10, 12],
    integers: [2, 3, 5, 7, 8, 10, 0],
  },
  G: {
    notes: ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F'],
    midiNumbers: [7, 8, 10, 12, 13, 15, 17],
    integers: [7, 8, 10, 0, 1, 3, 5],
  },
  C: {
    notes: ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'],
    midiNumbers: [0, 1, 3, 5, 6, 8, 10],
    integers: [0, 1, 3, 5, 6, 8, 10],
  },
  F: {
    notes: ['F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb'],
    midiNumbers: [5, 6, 8, 10, 11, 13, 15],
    integers: [5, 6, 8, 10, 11, 1, 3],
  },
  Bb: {
    notes: ['Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab'],
    midiNumbers: [10, 11, 13, 15, 16, 18, 20],
    integers: [10, 11, 1, 3, 4, 6, 8],
  },
  'F#': {
    notes: ['F#', 'G', 'A', 'B', 'C', 'D', 'E'],
    midiNumbers: [6, 7, 9, 11, 12, 14, 16],
    integers: [6, 7, 9, 11, 0, 2, 4],
  },
  'C#': {
    notes: ['C#', 'D', 'E', 'F#', 'G', 'A', 'B'],
    midiNumbers: [1, 2, 4, 6, 7, 9, 11],
    integers: [1, 2, 4, 6, 7, 9, 11],
  },
  'G#': {
    notes: ['G#', 'A', 'B', 'C#', 'D', 'E', 'F#'],
    midiNumbers: [8, 9, 11, 13, 14, 16, 18],
    integers: [8, 9, 11, 1, 2, 4, 6],
  },
  'D#': {
    notes: ['D#', 'E', 'F#', 'G#', 'A', 'B', 'C#'],
    midiNumbers: [3, 4, 6, 8, 9, 11, 13],
    integers: [3, 4, 6, 8, 9, 11, 1],
  },
  'A#': {
    notes: ['A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
    midiNumbers: [10, 11, 13, 15, 16, 18, 20],
    integers: [10, 11, 1, 3, 4, 6, 8],
  },
  'E#': {
    notes: ['E#', 'F#', 'G#', 'A#', 'B', 'C#', 'D#'],
    midiNumbers: [5, 6, 8, 10, 11, 13, 15],
    integers: [5, 6, 8, 10, 11, 1, 3],
  },
  'B#': {
    notes: ['B#', 'C#', 'D#', 'E#', 'F#', 'G#', 'A#'],
    midiNumbers: [0, 1, 3, 5, 6, 8, 10],
    integers: [0, 1, 3, 5, 6, 8, 10],
  },
};

type LocrianNames = keyof typeof locrian;

export const melodicMinor = {};

export const scales = {
  major,
  dorian,
  phrygian,
  lydian,
  mixolydian,
  minor,
  locrian,
} as const;

export type ScaleGroups = keyof typeof scales;
