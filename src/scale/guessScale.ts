import { majorScales } from '../consts';
import { getEquivalentNote } from '../notes/getEquivalentNote';

// export const determineTonicFromNotes = (arr: string[]) => {
//   const noteFrequency = Object.entries(
//     arr.reduce<Record<string, number>>((accum, note) => {
//       if (accum[note]) {
//         accum[note] += accum[note];
//       } else {
//         accum[note] = 1;
//       }

//       return accum;
//     }, {})
//   ).sort((a, b) => {
//     return b[1] - a[1];
//   });

//   return noteFrequency[0];
// };

const filterScalesFromNotes = (
  notes: string[],
  scales: string[][],
  exclusive = false
) => {
  return scales.filter((scale) => {
    if (exclusive) {
      return !notes.some(
        (note) =>
          scale.includes(note) || scale.includes(getEquivalentNote(note))
      );
    } else {
      return notes.every(
        (note) =>
          scale.includes(note) || scale.includes(getEquivalentNote(note))
      );
    }
  });
};

type KeyGuess = { name?: string; scale: string[] };

export const guessScale = (
  includedNotes: string[],
  excludedNotes: string[]
): KeyGuess[] => {
  const allMajors = Object.values(majorScales);
  const possibleScales = filterScalesFromNotes(excludedNotes, allMajors, true);
  const filteredScales = filterScalesFromNotes(includedNotes, possibleScales);

  return filteredScales.map((scale) => {
    return {
      name: `${scale?.at(0)} major`,
      scale,
    };
  });
};
