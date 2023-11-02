import {
  IntervalShorthandType,
  isIntervalShorthandType,
} from '../../consts/intervals.js';

export const readAlteration = (
  alteration: string
): { type?: IntervalShorthandType; degree: number } => {
  const [rawType, rawDegree] =
    alteration.match(/(b|#|M)(\d+)/)?.slice(1, 3) || [];

  let type;
  if (/b/.test(rawType)) type = 'm';
  if (/#/.test(rawType)) type = 'A';
  if (/M/.test(rawType)) type = 'M';

  return {
    type: isIntervalShorthandType(type) ? type : undefined,
    degree: Number(rawDegree),
  };
};
