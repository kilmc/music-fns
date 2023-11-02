import { ChordInfo } from '../readers/chords/readChord.js';

const weirdChords: Record<
  string,
  Pick<ChordInfo, 'quality' | 'type' | 'alteredNotes'>
> = {
  mb7b5: {
    quality: 'diminished',
    type: 'seventh',
    alteredNotes: undefined,
  },
};

export const isWeirdChord = (input: string) => {
  return Object.keys(weirdChords).some((chord) => input.includes(chord));
};

export const findWeirdChordInfo = (input: string) => {
  return Object.entries(weirdChords)
    .find(([identifier]) => {
      return input.includes(identifier);
    })
    ?.at(1);
};
