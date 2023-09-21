import { describe, expect, it } from 'vitest';
import { getScaleChords } from './getScaleChords.js';

describe('getScaleChords', () => {
  it('supports major scales', () => {
    expect(getScaleChords(['C', 'D', 'E', 'F', 'G', 'A', 'B'])).toEqual([
      { name: 'C', notes: ['C', 'E', 'G'], romanNumeral: 'I' },
      { name: 'Dm', notes: ['D', 'F', 'A'], romanNumeral: 'ii' },
      { name: 'Em', notes: ['E', 'G', 'B'], romanNumeral: 'iii' },
      { name: 'F', notes: ['F', 'A', 'C'], romanNumeral: 'IV' },
      { name: 'G', notes: ['G', 'B', 'D'], romanNumeral: 'V' },
      { name: 'Am', notes: ['A', 'C', 'E'], romanNumeral: 'vi' },
      { name: 'Bdim', notes: ['B', 'D', 'F'], romanNumeral: 'vii' },
    ]);

    expect(getScaleChords(['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'])).toEqual([
      { name: 'Db', notes: ['Db', 'F', 'Ab'], romanNumeral: 'I' },
      { name: 'Ebm', notes: ['Eb', 'Gb', 'Bb'], romanNumeral: 'ii' },
      { name: 'Fm', notes: ['F', 'Ab', 'C'], romanNumeral: 'iii' },
      { name: 'Gb', notes: ['Gb', 'Bb', 'Db'], romanNumeral: 'IV' },
      { name: 'Ab', notes: ['Ab', 'C', 'Eb'], romanNumeral: 'V' },
      { name: 'Bbm', notes: ['Bb', 'Db', 'F'], romanNumeral: 'vi' },
      { name: 'Cdim', notes: ['C', 'Eb', 'Gb'], romanNumeral: 'vii' },
    ]);
  });

  it('supports dorian scales', () => {
    const result = [
      { name: 'Bm', notes: ['B', 'D#', 'F#'], romanNumeral: 'i' },
      { name: 'C#m', notes: ['C#', 'E', 'G#'], romanNumeral: 'ii' },
      { name: 'D#', notes: ['D#', 'F#', 'A#'], romanNumeral: 'III' },
      { name: 'E', notes: ['E', 'G#', 'B'], romanNumeral: 'IV' },
      { name: 'F#m', notes: ['F#', 'A#', 'C#'], romanNumeral: 'v' },
      { name: 'G#dim', notes: ['G#', 'B', 'D#'], romanNumeral: 'vi' },
      { name: 'A#', notes: ['A#', 'C#', 'E'], romanNumeral: 'VII' },
    ];
    const scale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];

    expect(getScaleChords(scale, 'dorian')).toEqual(result);
  });

  it('supports phrygian scales', () => {
    const result = [
      { name: 'Bbm', notes: ['Bb', 'D', 'F'], romanNumeral: 'i' },
      { name: 'C', notes: ['C', 'Eb', 'G'], romanNumeral: 'II' },
      { name: 'D', notes: ['D', 'F', 'A'], romanNumeral: 'III' },
      { name: 'Ebm', notes: ['Eb', 'G', 'Bb'], romanNumeral: 'iv' },
      { name: 'Fdim', notes: ['F', 'A', 'C'], romanNumeral: 'v' },
      { name: 'G', notes: ['G', 'Bb', 'D'], romanNumeral: 'VI' },
      { name: 'Am', notes: ['A', 'C', 'Eb'], romanNumeral: 'vii' },
    ];
    const scale = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];

    expect(getScaleChords(scale, 'phrygian')).toEqual(result);
  });

  it('supports lydian scales', () => {
    const result = [
      { name: 'D', notes: ['D', 'F#', 'A'], romanNumeral: 'I' },
      { name: 'E', notes: ['E', 'G#', 'B'], romanNumeral: 'II' },
      { name: 'F#m', notes: ['F#', 'A', 'C#'], romanNumeral: 'iii' },
      { name: 'G#dim', notes: ['G#', 'B', 'D'], romanNumeral: 'iv' },
      { name: 'A', notes: ['A', 'C#', 'E'], romanNumeral: 'V' },
      { name: 'Bm', notes: ['B', 'D', 'F#'], romanNumeral: 'vi' },
      { name: 'C#m', notes: ['C#', 'E', 'G#'], romanNumeral: 'vii' },
    ];
    const scale = ['D', 'E', 'F#', 'G#', 'A', 'B', 'C#'];

    expect(getScaleChords(scale, 'lydian')).toEqual(result);
  });

  it('supports mixolydian scales', () => {
    const result = [
      { name: 'B', notes: ['B', 'D#', 'F#'], romanNumeral: 'I' },
      { name: 'C#m', notes: ['C#', 'E', 'G#'], romanNumeral: 'ii' },
      { name: 'D#dim', notes: ['D#', 'F#', 'A'], romanNumeral: 'iii' },
      { name: 'E', notes: ['E', 'G#', 'B'], romanNumeral: 'IV' },
      { name: 'F#m', notes: ['F#', 'A', 'C#'], romanNumeral: 'v' },
      { name: 'G#m', notes: ['G#', 'B', 'D#'], romanNumeral: 'vi' },
      { name: 'A', notes: ['A', 'C#', 'E'], romanNumeral: 'VII' },
    ];
    const scale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'];

    expect(getScaleChords(scale, 'mixolydian')).toEqual(result);
  });

  it('supports minor scales', () => {
    const result = [
      { name: 'Am', notes: ['A', 'C', 'E'], romanNumeral: 'i' },
      { name: 'Bdim', notes: ['B', 'D', 'F'], romanNumeral: 'ii' },
      { name: 'C', notes: ['C', 'E', 'G'], romanNumeral: 'III' },
      { name: 'Dm', notes: ['D', 'F', 'A'], romanNumeral: 'iv' },
      { name: 'Em', notes: ['E', 'G', 'B'], romanNumeral: 'v' },
      { name: 'F', notes: ['F', 'A', 'C'], romanNumeral: 'VI' },
      { name: 'G', notes: ['G', 'B', 'D'], romanNumeral: 'VII' },
    ];
    const scale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    expect(getScaleChords(scale, 'minor')).toEqual(result);
  });

  it('supports locrian scales', () => {
    const result = [
      { name: 'Edim', notes: ['E', 'G', 'Bb'], romanNumeral: 'i' },
      { name: 'F', notes: ['F', 'A', 'C'], romanNumeral: 'II' },
      { name: 'Gm', notes: ['G', 'Bb', 'D'], romanNumeral: 'iii' },
      { name: 'Am', notes: ['A', 'C', 'E'], romanNumeral: 'iv' },
      { name: 'Bb', notes: ['Bb', 'D', 'F'], romanNumeral: 'V' },
      { name: 'C', notes: ['C', 'E', 'G'], romanNumeral: 'VI' },
      { name: 'Dm', notes: ['D', 'F', 'A'], romanNumeral: 'vii' },
    ];
    const scale = ['E', 'F', 'G', 'A', 'Bb', 'C', 'D'];

    expect(getScaleChords(scale, 'locrian')).toEqual(result);
  });
});
