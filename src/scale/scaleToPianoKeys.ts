import { notesToSequentialKeys } from './notesToSequentialKeys.js';

export const scaleToPianoKeys = (scale: string[]) => {
  const integers = notesToSequentialKeys(scale);

  return scale.map((note, i) => {
    return { midiNumber: integers[i], note };
  });
};

export type ScaleKey = ReturnType<typeof scaleToPianoKeys>[number];
