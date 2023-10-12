// Chords
export { getChord } from './chords/getChord.js';
export { getScaleChords } from './chords/getScaleChords.js';

// Keys
export { getKey } from './keys/getKey.js';

// Notes
export { getEquivalentNote } from './notes/getEquivalentNote.js';
export { getInterval } from './notes/getInterval.js';
export { getScaleDegreeOfNote } from './notes/getScaleDegreeOfNote.js';
export { noteToInteger } from './notes/noteToInteger.js';
export { midiToNote, noteToMidi } from './notes/noteToMidi.js';
export { transposeNote } from './notes/transpose.js';

// Scales
export { extractScaleName } from './scale/extractName.js';
export { getScale } from './scale/getScale.js';
export { getScaleDegrees } from './scale/getScaleDegrees.js';
export { guessMajorScale } from './scale/guessMajorScale.js';
export { scaleToPianoKeys } from './scale/scaleToPianoKeys.js';
export { scaleToSequentialKeys } from './scale/scaleToSequentialKeys.js';

// Consts
export {
  scales,
  major,
  dorian,
  phrygian,
  lydian,
  mixolydian,
  minor,
  locrian,
} from './db/scales/allScales.js';
