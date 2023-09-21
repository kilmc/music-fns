import { scaleToSequentialKeys } from './scaleToSequentialKeys.js';

export const scaleToPianoKeys = (scale: string[]) => {
  const integers = scaleToSequentialKeys(scale);

  return scale.map((note, i) => {
    return { midiNumber: integers[i], note };
  });
};

export type ScaleKey = ReturnType<typeof scaleToPianoKeys>[number];
