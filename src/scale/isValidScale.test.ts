import { describe, expect, it } from 'vitest';
import { isValidScale } from './isValidScale.js';

describe('isValidScale', () => {
  it('should return false in these cases', () => {
    expect(isValidScale(['E', 'Gb', 'Ab', 'A', 'B', 'Db', 'Eb'])).toEqual(
      false
    );
  });
});
