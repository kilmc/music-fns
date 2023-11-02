export const accidentalWords = ['flat', 'sharp'] as const;
export type AccidentalWord = (typeof accidentalWords)[number];

export function isAccidentalWord(input: string): input is AccidentalWord {
  return !!accidentalWords.find((val) => input === val);
}
