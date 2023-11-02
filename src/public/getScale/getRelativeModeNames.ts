import { modalScaleDefinitions } from '../../consts/scales.js';
import { offsetArr } from '../../helpers/offsetArr.js';
import { Scale } from './getScale.js';

export const getRelativeModeNames = (scale: Scale): string[] | undefined => {
  if (scale.modeOf === undefined) return undefined;

  const modeNames = modalScaleDefinitions[scale.modeOf].map(
    (mode) => mode.name
  );

  const currentModeIndex = modeNames.indexOf(scale.type);
  const scaleNoteNames = scale.notes.map(({ name }) => name);
  const orderedModes = offsetArr(modeNames, currentModeIndex).map(
    (modeName, i) => `${scaleNoteNames[i]} ${modeName}`
  );

  return offsetArr(orderedModes, -currentModeIndex);
};
