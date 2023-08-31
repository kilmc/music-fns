import { describe, expect, it } from 'vitest';
import { getScaleDegreeOfNote } from './getScaleDegreeOfNote';

describe('getScaleDegreeOfNote', () => {
  it('converts notes to degrees based on a scale', () => {
    expect(
      ['E', 'A', 'C#', 'B'].map((note) =>
        getScaleDegreeOfNote(note, ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'])
      )
    ).toStrictEqual(['I', 'IV', 'vi', 'V']);
  });
});
