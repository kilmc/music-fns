import { ChordInfo } from './readChord.js';

export const readSusInfo = (
  input: string
): Pick<ChordInfo, 'isSusChord' | 'susDegree'> => {
  const regex = /(sus)(2|4|9)?/;
  const [susIdentifier, rawDegree] = input.match(regex)?.slice(1, 3) || [];

  if (susIdentifier !== undefined) {
    return {
      isSusChord: true,
      susDegree: rawDegree !== undefined ? Number(rawDegree) : 4,
    };
  } else {
    return {
      isSusChord: false,
      susDegree: undefined,
    };
  }
};
