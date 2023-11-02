import { keyTypes } from '../../consts/keys.js';
import { noteDefinitions } from '../../consts/notes.js';
import { noteToInteger } from '../../converters/notes/noteToInteger.js';
import { getScale } from '../getScale/getScale.js';

type KeyIntegerInfo = {
  name: string;
  integers: number[] | undefined;
};

export const keysNamesAndIntegers: KeyIntegerInfo[] = noteDefinitions
  .flatMap(({ names }) => [names.natural, names.flat, names.sharp])
  .flatMap((noteName) => keyTypes.map((type) => `${noteName} ${type}`))
  .map((keyName) => ({
    name: keyName,
    integers: getScale(keyName)?.integers,
  }));

export const guessKey = (inKeyNotes: string[], outOfKeyNotes: string[]) => {
  const inKey = inKeyNotes.map(noteToInteger);
  const outKey = outOfKeyNotes.map(noteToInteger);

  let guesses = keysNamesAndIntegers;

  if (outOfKeyNotes.length > 0) {
    guesses = guesses.filter(
      (set) => !outKey.some((int) => set.integers?.includes(int))
    );
  }

  if (inKeyNotes.length > 0) {
    guesses = guesses.filter((set) =>
      inKey.every((int) => set.integers?.includes(int))
    );
  }

  return guesses.map((item) => item.name);
};
