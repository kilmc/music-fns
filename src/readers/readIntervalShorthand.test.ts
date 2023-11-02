import { describe, expect, it } from 'vitest';
import { readIntervalShorthand } from './readIntervalShorthand.js';

describe('readIntervalShorthand', () => {
  it('handles', () => {
    expect(readIntervalShorthand('m3')).toStrictEqual({ type: 'm', degree: 3 });
  });
});
