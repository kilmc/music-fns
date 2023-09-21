import { describe, expect, it } from 'vitest';
import { guessMajorScale } from './guessMajorScale.js';

describe('guessMajorScale', () => {
  const testSongs = [
    {
      title: 'Dancing Queen',
      includedNotes: ['D', 'E', 'F#', 'G#', 'A', 'B'],
      excludedNotes: [],
      key: ['A major'],
    },
    {
      title: "Say It Ain't So",
      includedNotes: ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
      excludedNotes: [],
      key: ['Eb major'],
    },
    {
      title: 'Conspiracy',
      includedNotes: ['C', 'D', 'E', 'F', 'G', 'A#'],
      excludedNotes: [],
      key: ['F major'],
    },
    {
      title: 'Last Nite',
      includedNotes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      excludedNotes: [],
      key: ['C major'],
    },
    {
      title: 'The Dress',
      includedNotes: ['C', 'C#', 'D#', 'F', 'G', 'G#', 'A#'],
      excludedNotes: [],
      key: ['Ab major'],
    },
    {
      title: 'Fell in Love Without You',
      includedNotes: ['C#', 'D#', 'E'],
      excludedNotes: ['C', 'D', 'F', 'G', 'A'],
      key: ['Cb major', 'B major'],
    },
    {
      title: 'Some cool song',
      includedNotes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
      excludedNotes: [],
      key: ['Gb major', 'F# major'],
    },
    {
      title: 'Some cool other song',
      includedNotes: ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
      excludedNotes: [],
      key: ['Db major', 'C# major'],
    },
    {
      title: 'Antonia',
      includedNotes: ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'B'],
      excludedNotes: [],
      key: ['Gb major', 'F# major'],
    },
  ];

  it.each(testSongs)('$title', ({ includedNotes, excludedNotes, key }) => {
    expect(
      guessMajorScale(includedNotes, excludedNotes).map(([name]) => name)
    ).toStrictEqual(key);
  });
});
