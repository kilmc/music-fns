import { noteToMidi } from '../notes/noteToMidi.js';

export const scaleToSequentialKeys = (scale: string[], octave = -1) => {
  const startingNote = noteToMidi(`${scale[0]}${octave}`);

  return scale.map((note) => {
    const midiNumber = noteToMidi(`${note}${octave}`);

    if (midiNumber !== undefined && startingNote !== undefined) {
      return midiNumber >= startingNote ? midiNumber : midiNumber + 12;
    } else {
      return 120;
    }
  });
};
