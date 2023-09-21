import { isMidiNumber, keyboardNotePositions } from './helpers.js';

export const noteToMidi = (note: string): number | undefined => {
  let midiNote = note;
  if (!/([0-9]|-1)$/.test(note)) {
    midiNote = `${note}-1`;
  }

  const regex = /^([A-G][b#]?)([0-9]|-1)$/;
  const match = midiNote.match(regex)?.slice(1, 3);

  if (!match) return undefined;

  const [pitchClass, octave] = match;

  const noteNumber = keyboardNotePositions.findIndex((notes) =>
    notes.includes(pitchClass)
  );
  const result = (parseInt(octave) + 1) * 12 + noteNumber;

  if (isMidiNumber(result)) {
    return result;
  }
};

export const midiToNote = (num: number) => {
  return keyboardNotePositions[num % 12];
};
