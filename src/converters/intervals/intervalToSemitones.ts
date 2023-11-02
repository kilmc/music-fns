import { Interval, intervals } from '../../consts/intervals.js';

export const intervalToSemitones = (interval: Interval) => {
  if (typeof interval === 'number') {
    return interval;
  } else if (typeof interval === 'string') {
    const index = intervals.findIndex((i) => {
      return i.shorthand.includes(interval);
    });

    return index;
  } else {
    return 0;
  }
};
