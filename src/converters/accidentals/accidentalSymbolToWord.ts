import { AccidentalWord } from '../../consts/accidentals.js';

export const accidentalSymbolToWord = (
  input: string
): AccidentalWord | undefined => {
  if (input === 'b' || input === '♭') {
    return 'flat';
  } else if (input === '#') {
    return 'sharp';
  } else {
    return undefined;
  }
};
