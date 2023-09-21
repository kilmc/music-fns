import { NoteType } from '../types.js';

export const determineNoteType = (note: string): NoteType => {
  if (/[A-G]#/.test(note)) {
    return 'sharp';
  } else if (/[A-G]b/.test(note)) {
    return 'flat';
  } else {
    return 'natural';
  }
};
