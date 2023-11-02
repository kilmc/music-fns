import { describe, expect, it } from 'vitest';
import { readSusInfo } from './readSusInfo.js';

describe('readSusInfo', () => {
  it('handles sus2', () => {
    expect(readSusInfo('Csus2')).toStrictEqual({
      isSusChord: true,
      susDegree: 2,
    });
  });

  it('handles sus4', () => {
    expect(readSusInfo('Csus')).toStrictEqual({
      isSusChord: true,
      susDegree: 4,
    });
    expect(readSusInfo('Csus4')).toStrictEqual({
      isSusChord: true,
      susDegree: 4,
    });
  });

  it('handles sus9', () => {
    expect(readSusInfo('Csus9')).toStrictEqual({
      isSusChord: true,
      susDegree: 9,
    });
  });
});
