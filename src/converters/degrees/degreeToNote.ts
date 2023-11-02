import { resetNoteOrder } from '../../helpers/resetNoteOrder.js';

export const degreeToNote = (chordRoot: string, degree: number) => {
  const notes = resetNoteOrder(chordRoot);
  return notes.at((degree % notes.length) - 1);
};
