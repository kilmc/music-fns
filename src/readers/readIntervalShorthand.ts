import {
  IntervalShorthand,
  IntervalShorthandType,
  isIntervalShorthandType,
} from '../consts/intervals.js';

const empty = {
  type: undefined,
  degree: undefined,
};

export const readIntervalShorthand = (
  input?: IntervalShorthand
): { type?: IntervalShorthandType; degree?: number } => {
  if (input === undefined) return empty;

  const [rawType, rawDegree] =
    input.match(/(m|M|A|P|d)(\d+)/)?.slice(1, 3) || [];

  if (isIntervalShorthandType(rawType)) {
    return {
      degree: Number(rawDegree),
      type: rawType,
    };
  } else {
    return {
      type: undefined,
      degree: undefined,
    };
  }
};
