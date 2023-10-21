import { notePositions } from '../consts.js';
import { offsetArr } from '../helper.js';
import { MIDINumber } from '../types.js';

export const resetNotePositions = (note: string) => {
  const noteIndex = notePositions.findIndex((notes) =>
    Object.values(notes).includes(note)
  );

  return offsetArr(notePositions, noteIndex);
};

export function isMidiNumber(value: any): value is MIDINumber {
  return (value as MIDINumber) >= 0 && value <= 127;
}

export const keyboardNotePositions = [
  ['C', 'B#'],
  ['C#', 'Db'],
  ['D'],
  ['D#', 'Eb'],
  ['E', 'Fb'],
  ['F', 'E#'],
  ['F#', 'Gb'],
  ['G'],
  ['G#', 'Ab'],
  ['A'],
  ['A#', 'Bb'],
  ['B', 'Cb'],
];
