import { ChordInfo } from './readChord.js';

export const readAddInfo = (
  input: string
): Pick<ChordInfo, 'isAddChord' | 'addDegree'> => {
  const regex = /add(2|4|9|11|13)/;
  const match = input.match(regex)?.slice(1, 2).at(0);

  const sixNineRegex = /6\/9/;

  if (sixNineRegex.test(input)) {
    return {
      isAddChord: true,
      addDegree: 9,
    };
  }

  if (match === undefined) {
    return {
      isAddChord: false,
      addDegree: undefined,
    };
  }

  return {
    isAddChord: true,
    addDegree: Number(match),
  };
};
