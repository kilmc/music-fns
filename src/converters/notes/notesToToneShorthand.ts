import { toneTypeShorthands } from '../../consts/intervals.js';
import { getNoteDistance } from '../../public/getNoteDistance.js';

const groupArrayInTwos = (arr: string[]) => {
  const result = arr.map((item, index) => {
    if (arr[index + 1]) {
      return [item, arr[index + 1]];
    } else {
      return [item, arr[0]];
    }
  });

  return result;
};

export const notesToToneShorthand = (notes: string[]) => {
  return groupArrayInTwos(notes)
    .map(([n1, n2]) => getNoteDistance(n1, n2))
    .map((n) => toneTypeShorthands[n - 1]);
};
