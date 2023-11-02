import { describe, expect, it } from 'vitest';
import { readAddInfo } from './readAddInfo.js';

describe('readAddInfo', () => {
  it('handles add4', () => {
    expect(readAddInfo('Cadd4')).toStrictEqual({
      isAddChord: true,
      addDegree: 4,
    });
  });
});
