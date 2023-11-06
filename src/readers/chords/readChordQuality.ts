import {
  ChordQuality,
  ChordType,
  augmentedChordIdentifiers,
  diminishedChordIdentifiers,
  halfDiminishedChordIdentifiers,
  majorChordIdentifiers,
  minorChordIdentifiers,
} from '../../consts/chords.js';
import { isMinorMajorSeventh } from '../../edgecases/isMinorMajorSeventh.js';
import { chordQualityRegex, noteRegex } from '../../consts/regexes.js';

export const readChordQuality = (
  input: string,
  type?: ChordType
): ChordQuality | undefined => {
  const regex = new RegExp(`${noteRegex.source}(${chordQualityRegex.source})?`);
  const quality = input.match(regex)?.slice(3, 4)[0];

  const hasQuality = quality !== undefined;
  const hasType = type !== undefined;

  if (
    !hasQuality &&
    hasType &&
    ['seventh', 'ninth', 'eleventh', 'thirteenth'].includes(type)
  )
    return 'dominant';

  if (!hasQuality || majorChordIdentifiers.some((i) => quality === i)) {
    return 'major';
  }

  if (halfDiminishedChordIdentifiers.some((i) => input.includes(i))) {
    return 'half-diminished';
  }

  if (minorChordIdentifiers.some((i) => quality === i)) {
    if (isMinorMajorSeventh(input)) {
      return 'minor-major';
    } else {
      return 'minor';
    }
  }

  if (diminishedChordIdentifiers.some((i) => quality === i)) {
    return 'diminished';
  }

  if (augmentedChordIdentifiers.some((i) => quality === i)) {
    return 'augmented';
  }
};
