import { noteDefinitions } from '../../consts/notes.js';
import { ScaleDefinition, ScaleType } from '../../consts/scales.js';

export const generateKeyNames = (scaleDefinitions: ScaleDefinition[]) => {
  const modeNames = scaleDefinitions.map((def) => def.name);
  const noteNames = noteDefinitions
    .flatMap(({ names }) => [names.natural, names.flat, names.sharp])
    .filter(Boolean);

  const modeObj = modeNames
    .map((modeName) => ({
      [modeName]: noteNames.map((noteName) => `${noteName} ${modeName}`),
    }))
    .reduce<Record<ScaleType, string[]>>((acc, x) => {
      return { ...acc, ...x };
    }, {} as Record<ScaleType, string[]>);

  return modeObj;
};
