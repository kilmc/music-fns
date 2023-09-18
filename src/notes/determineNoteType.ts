import { isFlat, isSharp } from '../helper.js';
import { NoteType } from '../types.js';

export const determineNoteType = (note: string): NoteType => {
  if (isSharp(note)) {
    return 'sharp';
  } else if (isFlat(note)) {
    return 'flat';
  } else {
    return 'natural';
  }
};
