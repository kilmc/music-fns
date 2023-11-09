import { describe, expect, it } from 'vitest';
import { getScale } from './getScale.js';
import { scaleTypes } from '../../main.js';

describe.only('makeScale', () => {
  const scales = [
    { name: 'A major', notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'] },
    { name: 'B major', notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'] },
    { name: 'C major', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] },
    { name: 'F major', notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'] },
    { name: 'C lydian', notes: ['C', 'D', 'E', 'F#', 'G', 'A', 'B'] },
    { name: 'C major blues', notes: ['C', 'D', 'Eb', 'Fb', 'G', 'A'] },
    {
      name: 'C phrygian sharp 6',
      notes: ['C', 'Db', 'Eb', 'F', 'G', 'A', 'Bb'],
    },
  ];

  it.each(scales)('handles $name', ({ name, notes }) => {
    expect(getScale(name)?.notes.map((n) => n.name)).toStrictEqual(notes);
  });

  it('returns additional details', () => {
    expect(getScale('C major')?.name).toStrictEqual('C major');
    expect(getScale('C major')?.root).toStrictEqual('C');

    expect(getScale('Bb minor')?.name).toStrictEqual('Bb minor');
    expect(getScale('Bb minor')?.root).toStrictEqual('Bb');
    expect(getScale('C phrygian sharp 6')?.name).toStrictEqual(
      'C phrygian sharp 6'
    );
  });

  it.each(scaleTypes)('supports %s', (input) => {
    const fullName = `C ${input}`;
    expect(getScale(fullName)?.name).toStrictEqual(fullName);
  });
});
