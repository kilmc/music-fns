import { romanNumerals } from '../../consts/chords.js';
import { keyChordQualitiesMap } from '../../consts/keys.js';
import { majorScaleDefinitions } from '../../consts/scales.js';
import { chordQualityToChordSymbol } from '../../converters/chords/chordQualityToChordSymbol.js';
import { offsetArr } from '../../helpers/offsetArr.js';
import { romanNumeralCase } from '../../helpers/romanNumeralCase.js';
import { Chord, emptyChord, getChord } from '../getChord/getChord.js';
import { Scale } from '../getScale/getScale.js';

export const getKeyChords = (scale: Scale): Chord[] | undefined => {
  const scaleNotes = scale.notes;
  const modeIndex = majorScaleDefinitions.findIndex(
    (x) => x.name === scale.type
  );

  if (scale.modeOf === undefined) return undefined;

  const scaleQualities = offsetArr(
    keyChordQualitiesMap[scale.modeOf],
    modeIndex
  );

  return scaleNotes.map((note, i) => {
    const chordQuality = scaleQualities[i];
    const chordName = `${note.name}${chordQualityToChordSymbol(chordQuality)}`;

    const chord = getChord(chordName);
    const romanNumeral = romanNumeralCase(romanNumerals[i], chordQuality);

    if (chord === undefined) return emptyChord;

    return {
      notes: chord.notes,
      name: chord.name,
      romanNumeral: romanNumeral,
    };
  });
};
