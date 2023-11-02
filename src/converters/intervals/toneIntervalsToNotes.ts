import {
  ToneTypeShorthand,
  toneTypeShorthandMap,
} from '../../consts/intervals.js';
import { transposeNote } from '../../public/transposeNote.js';

export const toneIntervalsToNotes = (
  intervals: ToneTypeShorthand[],
  note: string
) => {
  const semitones = intervals.map((tone) => toneTypeShorthandMap[tone]);

  return semitones
    .map((_, i) => {
      const calcSemis = semitones.slice(0, i).reduce((xs, x) => xs + x, 0);
      return transposeNote(note, i === 0 ? 0 : calcSemis);
    })
    .filter(Boolean);
};
