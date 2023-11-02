import {
  alteredNotesRegex,
  chordQualityRegex,
  chordTypeRegex,
  noteRegex,
} from '../../consts/regexes.js';

export const readAlteredNotes = (input: string) => {
  let output = undefined;
  if (/\(|\)/.test(input)) {
    output = input.match(alteredNotesRegex)?.at(0)?.replace(/\(|\)/g, '');
  } else if (/([b#]\d+)/.test(input)) {
    const regex = new RegExp(
      `${noteRegex.source}(${chordQualityRegex.source})?${chordTypeRegex.source}?`
    );
    output = input.replace(regex, '');
  }

  if (output === undefined || output.length === 0) return undefined;
  return output.split(/([b#]\d+)/g).filter(Boolean);
};
