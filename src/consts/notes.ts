const noteTypes = [
  'natural',
  'flat',
  'sharp',
  'doubleSharp',
  'doubleFlat',
  'tripleFlat',
  'tripleSharp',
] as const;

export type NoteType = (typeof noteTypes)[number];
export type NoteNames = {
  [k in NoteType]?: string;
};
export function isNoteType(input?: string): input is NoteType {
  return !!noteTypes.find((val) => input === val);
}

export type NoteDefinition = {
  midiNumber: number;
  names: NoteNames;
};

export const noteDefinitions: NoteDefinition[] = [
  { midiNumber: 60, names: { natural: 'C', sharp: 'B#', doubleFlat: 'Dbb' } },
  { midiNumber: 61, names: { sharp: 'C#', flat: 'Db', doubleSharp: 'B##' } },
  {
    midiNumber: 62,
    names: { natural: 'D', doubleFlat: 'Ebb', doubleSharp: 'C##' },
  },
  { midiNumber: 63, names: { sharp: 'D#', flat: 'Eb', doubleFlat: 'Fbb' } },
  { midiNumber: 64, names: { natural: 'E', flat: 'Fb', doubleSharp: 'D##' } },
  { midiNumber: 65, names: { natural: 'F', sharp: 'E#', doubleFlat: 'Gbb' } },
  { midiNumber: 66, names: { sharp: 'F#', flat: 'Gb', doubleSharp: 'E##' } },
  {
    midiNumber: 67,
    names: { natural: 'G', doubleFlat: 'Abb', doubleSharp: 'F##' },
  },
  { midiNumber: 68, names: { sharp: 'G#', flat: 'Ab', tripleSharp: 'F###' } },
  {
    midiNumber: 69,
    names: { natural: 'A', doubleFlat: 'Bbb', doubleSharp: 'G##' },
  },
  { midiNumber: 70, names: { sharp: 'A#', flat: 'Bb', doubleFlat: 'Cbb' } },
  { midiNumber: 71, names: { natural: 'B', flat: 'Cb', doubleSharp: 'A##' } },
];

export type Note = {
  name: string;
  midiNumber: number;
};
