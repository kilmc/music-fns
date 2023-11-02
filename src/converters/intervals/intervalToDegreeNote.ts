import { IntervalShorthand } from '../../consts/intervals.js';
import { resetNoteOrder } from '../../helpers/resetNoteOrder.js';

export const intervalToDegreeNote = (
  chordRoot: string,
  interval: IntervalShorthand
) => {
  const notes = resetNoteOrder(chordRoot);

  // rough rule to get tritone is go to the 5th and down a semitone so
  // I'm zero indexed the 5th note is 4, minus 1 is 3.
  if (interval === 'TT') return notes[4];

  const [_, intervalDegree] = interval.match(/(\D)(\d+)/)?.slice(1, 3) || [];

  let correctedDegree: number = Number(intervalDegree);

  if (correctedDegree >= 8) correctedDegree = correctedDegree % 7;

  return notes[correctedDegree - 1];
};
