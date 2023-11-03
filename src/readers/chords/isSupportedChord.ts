import { chordQualityRegex, noteRegex } from '../../consts/regexes.js';

const validAddChord = (input: string) => /add(2|4|9|11|13|)$/.test(input);
const validSusChord = (input: string) => /sus(2|4|9|)$/.test(input);
const validAlteredNoteChord = (input: string) =>
  /(b|#)(4|5|6|7|9|11|13)/.test(input);
const validExtendedNoSymbol = (input: string) =>
  new RegExp(`${noteRegex.source}(2|4|5|6|7|9|11|13)`).test(input);
const validExtendedWithSymbol = (input: string) =>
  new RegExp(
    `${noteRegex.source}(${chordQualityRegex.source})(2|4|5|6|7|9|11|13)$`
  ).test(input);

const validQualityOnlyChord = (input: string) =>
  new RegExp(`^${noteRegex.source}(${chordQualityRegex.source})$`).test(input);
const validQualityChord = (input: string) =>
  new RegExp(`^${noteRegex.source}(${chordQualityRegex.source})`).test(input);

export const isSupportedChord = (input: string) => {
  const hasQualityRegex = new RegExp(`${chordQualityRegex}`);

  if (/\d+/.test(input)) {
    if (/(b|#)\d+/.test(input)) return validAlteredNoteChord(input);
    if (/add/.test(input)) return validAddChord(input);
    if (/sus/.test(input)) return validSusChord(input);
    if (chordQualityRegex.test(input)) {
      if (validExtendedNoSymbol(input)) return true;
      if (/(mmaj7|mM7|mΔ7|-Δ7)/.test(input)) return noteRegex.test(input);
      if (validQualityChord(input)) return validExtendedWithSymbol(input);

      return validQualityChord(input);
    }
    return validExtendedNoSymbol(input);
  }

  if (/add/.test(input)) return validAddChord(input);
  if (/sus/.test(input)) return validSusChord(input);

  if (hasQualityRegex.test(input)) return validQualityOnlyChord(input);

  const majorRegex = new RegExp(`^${noteRegex.source}$`);
  return majorRegex.test(input);
};
