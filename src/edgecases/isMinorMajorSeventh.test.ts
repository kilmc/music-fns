import { describe, expect, it } from 'vitest';
import { isMinorMajorSeventh } from './isMinorMajorSeventh.js';

describe('readMinorMajorSeventh', () => {
  it('handles non minor major 7th chords', () => {
    expect(isMinorMajorSeventh('C')).toBe(false);
    expect(isMinorMajorSeventh('Cmaj')).toBe(false);
    expect(isMinorMajorSeventh('Cm7')).toBe(false);
    expect(isMinorMajorSeventh('Cm7')).toBe(false);
  });

  it('handles minor major 7th chords', () => {
    expect(isMinorMajorSeventh('CmM7')).toBe(true);
    expect(isMinorMajorSeventh('Cmmaj7')).toBe(true);
    expect(isMinorMajorSeventh('CmΔ7')).toBe(true);
    expect(isMinorMajorSeventh('C-Δ7')).toBe(true);
  });
});
