import { chordQualityRegex, noteRegex } from '../../consts/regexes.js';

const isValidAddChord = (input: string) => /add(2|4|9|11|13|)$/.test(input);
const isValidSusChord = (input: string) => /sus(2|4|9|)$/.test(input);
const isValidAlteredNoteChord = (input: string) =>
  /(b|#)(4|5|6|7|9|11|13)/.test(input);

export const isSupportedChord = (input: string) => {
  const hasQualityRegex = new RegExp(`${chordQualityRegex}`);

  if (/\d+/.test(input)) {
    if (/(b|#)\d+/.test(input)) return isValidAlteredNoteChord(input);
    if (/add/.test(input)) return isValidAddChord(input);
    if (/sus/.test(input)) return isValidSusChord(input);

    return /(2|4|5|6|7|9|11|13)/.test(input);
  }

  if (/add/.test(input)) return isValidAddChord(input);
  if (/sus/.test(input)) return isValidSusChord(input);

  if (hasQualityRegex.test(input)) {
    const isValidHasQuality = new RegExp(
      `^${noteRegex.source}(${chordQualityRegex.source})$`
    );
    return isValidHasQuality.test(input);
  }

  const majorRegex = new RegExp(`^${noteRegex.source}$`);
  return majorRegex.test(input);
};
