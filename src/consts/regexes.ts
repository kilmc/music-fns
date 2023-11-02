import { chordSymbols } from './chords.js';

const regexOr = (arr: string[]) => {
  const escapedArr = arr.map((item) => {
    return item === '+' ? `\\${item}` : item;
  });
  return new RegExp(escapedArr.sort((a, b) => b.length - a.length).join('|'));
};

export const noteRegex = /([A-G])(b|#)?/;
export const chordQualityRegex = new RegExp(regexOr(chordSymbols));
export const chordTypeRegex = /(2|4|5|6|7|9|11|13)/;
export const alteredNotesRegex = /\((?:[b#](?:5|7|9|11|13))+\)/;
