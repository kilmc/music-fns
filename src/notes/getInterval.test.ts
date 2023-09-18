import { describe, expect, it } from 'vitest';
import { getInterval } from './getInterval.js';

describe('getInterval', () => {
  it('returns the most likely interval name', () => {
    expect(getInterval('C', 'E')).toEqual('M3');
  });
});
