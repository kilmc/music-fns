import { describe, expect, it } from 'vitest';
import { majorScales } from '../consts';
import {
  determineScaleFromBassProgression,
  determineScaleFromNotes,
} from './determineScaleFromNotes';

describe('determineScaleFromNotes', () => {
  it.skip('returns a scale', () => {
    expect(
      determineScaleFromNotes({
        melody: ['E', 'Gb', 'Ab', 'B', 'Db'],
        bass: ['A', 'C#', 'E', 'G#'],
      })
    ).toBe('E major');
  });
});

describe('determine', () => {
  it.skip('returns a smaller list of scales', () => {
    const scaleOptions = Object.entries(majorScales).filter((scale) =>
      ['C', 'F'].includes(scale[0])
    );
    const result = determineScaleFromBassProgression(
      ['C', 'D', 'F', 'C'],
      scaleOptions
    );
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(['C', ['C', 'D', 'E', 'F', 'G', 'A', 'B']]);
  });
});
