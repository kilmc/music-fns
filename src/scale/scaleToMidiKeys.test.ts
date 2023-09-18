import { describe, expect, it } from 'vitest';
import { ScaleKey, scaleToPianoKeys } from './scaleToMidiKeys.js';

export const majorScales: [string, string[], ScaleKey[]][] = [
  [
    'C',
    ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    [
      { midiNumber: 0, note: 'C' },
      { midiNumber: 2, note: 'D' },
      { midiNumber: 4, note: 'E' },
      { midiNumber: 5, note: 'F' },
      { midiNumber: 7, note: 'G' },
      { midiNumber: 9, note: 'A' },
      { midiNumber: 11, note: 'B' },
    ],
  ],
  [
    'F',
    ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    [
      { midiNumber: 5, note: 'F' },
      { midiNumber: 7, note: 'G' },
      { midiNumber: 9, note: 'A' },
      { midiNumber: 10, note: 'Bb' },
      { midiNumber: 12, note: 'C' },
      { midiNumber: 14, note: 'D' },
      { midiNumber: 16, note: 'E' },
    ],
  ],
  [
    'Bb',
    ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    [
      { midiNumber: 10, note: 'Bb' },
      { midiNumber: 12, note: 'C' },
      { midiNumber: 14, note: 'D' },
      { midiNumber: 15, note: 'Eb' },
      { midiNumber: 17, note: 'F' },
      { midiNumber: 19, note: 'G' },
      { midiNumber: 21, note: 'A' },
    ],
  ],
  [
    'Eb',
    ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    [
      { midiNumber: 3, note: 'Eb' },
      { midiNumber: 5, note: 'F' },
      { midiNumber: 7, note: 'G' },
      { midiNumber: 8, note: 'Ab' },
      { midiNumber: 10, note: 'Bb' },
      { midiNumber: 12, note: 'C' },
      { midiNumber: 14, note: 'D' },
    ],
  ],
  [
    'Ab',
    ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    [
      { midiNumber: 8, note: 'Ab' },
      { midiNumber: 10, note: 'Bb' },
      { midiNumber: 12, note: 'C' },
      { midiNumber: 13, note: 'Db' },
      { midiNumber: 15, note: 'Eb' },
      { midiNumber: 17, note: 'F' },
      { midiNumber: 19, note: 'G' },
    ],
  ],
  [
    'Db',
    ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    [
      { midiNumber: 1, note: 'Db' },
      { midiNumber: 3, note: 'Eb' },
      { midiNumber: 5, note: 'F' },
      { midiNumber: 6, note: 'Gb' },
      { midiNumber: 8, note: 'Ab' },
      { midiNumber: 10, note: 'Bb' },
      { midiNumber: 12, note: 'C' },
    ],
  ],
  [
    'Gb',
    ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    [
      { midiNumber: 6, note: 'Gb' },
      { midiNumber: 8, note: 'Ab' },
      { midiNumber: 10, note: 'Bb' },
      { midiNumber: 11, note: 'Cb' },
      { midiNumber: 13, note: 'Db' },
      { midiNumber: 15, note: 'Eb' },
      { midiNumber: 17, note: 'F' },
    ],
  ],
  [
    'Cb',
    ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
    [
      { midiNumber: 11, note: 'Cb' },
      { midiNumber: 13, note: 'Db' },
      { midiNumber: 15, note: 'Eb' },
      { midiNumber: 16, note: 'Fb' },
      { midiNumber: 18, note: 'Gb' },
      { midiNumber: 20, note: 'Ab' },
      { midiNumber: 22, note: 'Bb' },
    ],
  ],
  [
    'G',
    ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    [
      { midiNumber: 7, note: 'G' },
      { midiNumber: 9, note: 'A' },
      { midiNumber: 11, note: 'B' },
      { midiNumber: 12, note: 'C' },
      { midiNumber: 14, note: 'D' },
      { midiNumber: 16, note: 'E' },
      { midiNumber: 18, note: 'F#' },
    ],
  ],
  [
    'D',
    ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    [
      { midiNumber: 2, note: 'D' },
      { midiNumber: 4, note: 'E' },
      { midiNumber: 6, note: 'F#' },
      { midiNumber: 7, note: 'G' },
      { midiNumber: 9, note: 'A' },
      { midiNumber: 11, note: 'B' },
      { midiNumber: 13, note: 'C#' },
    ],
  ],
  [
    'A',
    ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    [
      { midiNumber: 9, note: 'A' },
      { midiNumber: 11, note: 'B' },
      { midiNumber: 13, note: 'C#' },
      { midiNumber: 14, note: 'D' },
      { midiNumber: 16, note: 'E' },
      { midiNumber: 18, note: 'F#' },
      { midiNumber: 20, note: 'G#' },
    ],
  ],
  [
    'E',
    ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    [
      { midiNumber: 4, note: 'E' },
      { midiNumber: 6, note: 'F#' },
      { midiNumber: 8, note: 'G#' },
      { midiNumber: 9, note: 'A' },
      { midiNumber: 11, note: 'B' },
      { midiNumber: 13, note: 'C#' },
      { midiNumber: 15, note: 'D#' },
    ],
  ],
  [
    'B',
    ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    [
      { midiNumber: 11, note: 'B' },
      { midiNumber: 13, note: 'C#' },
      { midiNumber: 15, note: 'D#' },
      { midiNumber: 16, note: 'E' },
      { midiNumber: 18, note: 'F#' },
      { midiNumber: 20, note: 'G#' },
      { midiNumber: 22, note: 'A#' },
    ],
  ],
  [
    "'F#'",
    ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    [
      { midiNumber: 6, note: 'F#' },
      { midiNumber: 8, note: 'G#' },
      { midiNumber: 10, note: 'A#' },
      { midiNumber: 11, note: 'B' },
      { midiNumber: 13, note: 'C#' },
      { midiNumber: 15, note: 'D#' },
      { midiNumber: 17, note: 'E#' },
    ],
  ],
  [
    "'C#'",
    ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
    [
      { midiNumber: 1, note: 'C#' },
      { midiNumber: 3, note: 'D#' },
      { midiNumber: 5, note: 'E#' },
      { midiNumber: 6, note: 'F#' },
      { midiNumber: 8, note: 'G#' },
      { midiNumber: 10, note: 'A#' },
      { midiNumber: 12, note: 'B#' },
    ],
  ],
];

describe('scaleToMidiKeys', () => {
  it.each(majorScales)('gets degrees for %s', (_, scale, result) => {
    expect(scaleToPianoKeys(scale)).toStrictEqual(result);
  });
});
