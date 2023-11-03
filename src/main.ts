export { getChord } from './public/getChord/getChord.js';
export { getKey } from './public/getKey/getKey.js';
export { getScale } from './public/getScale/getScale.js';
export { guessKey } from './public/guessKey/guessKey.js';
export { getNoteDistance } from './public/getNoteDistance.js';
export { getNoteData } from './public/getNoteData.js';
export { readScale } from './public/readScale.js';
export { transposeNote } from './public/transposeNote.js';

// Consts
// ----------------------------------------------------------------------------
export {
  harmonicMinorModalKeyNames,
  majorModalKeyNames,
  melodicMinorModalKeyNames,
} from './public/consts.js';

// Types
// ----------------------------------------------------------------------------

export type { Chord } from './public/getChord/getChord.js';
export type { Key } from './public/getKey/getKey.js';
export type { Scale } from './public/getScale/getScale.js';
export type { ScaleInfo } from './public/readScale.js';
export type { Note } from './consts/notes.js';
export type { TransposedNote } from './public/transposeNote.js';
