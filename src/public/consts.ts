import {
  harmonicMinorScaleDefinitions,
  majorScaleDefinitions,
  melodicMinorScaleDefinitions,
} from '../consts/scales.js';
import { generateKeyNames } from '../converters/keys/scaleDefinitionsToKeyNames.js';

export const majorModalKeyNames = generateKeyNames(majorScaleDefinitions);
export const melodicMinorModalKeyNames = generateKeyNames(
  melodicMinorScaleDefinitions
);
export const harmonicMinorModalKeyNames = generateKeyNames(
  harmonicMinorScaleDefinitions
);
