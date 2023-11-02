import {
  majorChordIdentifiers,
  minorChordIdentifiers,
} from '../consts/chords.js';

export const isMinorMajorSeventh = (input: string) => {
  const minorIdentifiersOr = minorChordIdentifiers.join('|');
  const majorIdentifiersOr = majorChordIdentifiers.join('|');
  const regex = new RegExp(`(${minorIdentifiersOr})(${majorIdentifiersOr})7`);

  return regex.test(input);
};
