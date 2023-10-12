import { describe, expect, it } from 'vitest';
import { extractScaleName } from './extractName.js';

describe('getScale', () => {
  it('supports major scales', () => {
    expect(extractScaleName('C major')).toStrictEqual(['C', 'major']);
    expect(extractScaleName('F# major')).toStrictEqual(['F#', 'major']);
    expect(extractScaleName('Bb major')).toStrictEqual(['Bb', 'major']);

    expect(extractScaleName('C ionian')).toStrictEqual(['C', 'major']);
    expect(extractScaleName('F# ionian')).toStrictEqual(['F#', 'major']);
    expect(extractScaleName('Bb ionian')).toStrictEqual(['Bb', 'major']);
  });

  it('supports dorian scales', () => {
    expect(extractScaleName('D dorian')).toStrictEqual(['D', 'dorian']);
    expect(extractScaleName('Ab dorian')).toStrictEqual(['Ab', 'dorian']);
    expect(extractScaleName('C dorian')).toStrictEqual(['C', 'dorian']);
  });

  it('supports phrygian scales', () => {
    expect(extractScaleName('F# phrygian')).toStrictEqual(['F#', 'phrygian']);
    expect(extractScaleName('G phrygian')).toStrictEqual(['G', 'phrygian']);
    expect(extractScaleName('Eb phrygian')).toStrictEqual(['Eb', 'phrygian']);
  });

  it('supports lydian scales', () => {
    expect(extractScaleName('F lydian')).toStrictEqual(['F', 'lydian']);
    expect(extractScaleName('A lydian')).toStrictEqual(['A', 'lydian']);
    expect(extractScaleName('Gb lydian')).toStrictEqual(['Gb', 'lydian']);
  });

  it('supports mixolydian scales', () => {
    expect(extractScaleName('G mixolydian')).toStrictEqual(['G', 'mixolydian']);
    expect(extractScaleName('C# mixolydian')).toStrictEqual([
      'C#',
      'mixolydian',
    ]);
    expect(extractScaleName('F mixolydian')).toStrictEqual(['F', 'mixolydian']);
  });

  it('supports minor scales', () => {
    expect(extractScaleName('C minor')).toStrictEqual(['C', 'minor']);
    expect(extractScaleName('D# minor')).toStrictEqual(['D#', 'minor']);
    expect(extractScaleName('Eb minor')).toStrictEqual(['Eb', 'minor']);

    expect(extractScaleName('C aeolian')).toStrictEqual(['C', 'minor']);
    expect(extractScaleName('D# aeolian')).toStrictEqual(['D#', 'minor']);
    expect(extractScaleName('Eb aeolian')).toStrictEqual(['Eb', 'minor']);
  });

  it('supports locrian scales', () => {
    expect(extractScaleName('B locrian')).toStrictEqual(['B', 'locrian']);
    expect(extractScaleName('A locrian')).toStrictEqual(['A', 'locrian']);
    expect(extractScaleName('Bb locrian')).toStrictEqual(['Bb', 'locrian']);
  });

  it('supports multiple cases', () => {
    expect(extractScaleName('C Major')).toStrictEqual(['C', 'major']);
    expect(extractScaleName('c Major')).toStrictEqual(['C', 'major']);
  });
});
