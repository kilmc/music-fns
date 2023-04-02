import { majorScales, modes } from '../consts';
import { getKey } from '../keys/getKey';
import { getModeName } from '../modes/getName';
import { getEquivalentNote } from '../notes/getEquivalentNote';
import type { TMode } from '../types';

export interface IDetermineScale {
  melody: string[];
  bass: string[];
}

export const determineScaleFromBassProgression = (
  notes: string[],
  scales: [string, string[]][]
) => {
  const knownProgressions = ['1241', '4154'];
  console.log(scales);

  return scales.filter(([name, scale]) => {
    const progression: string = notes
      .map((note) => scale.indexOf(note) + 1)
      .join('');
    return knownProgressions.includes(progression);
  });
};

export const determineTonicFromNotes = (arr: string[]) => {
  const noteFrequency = Object.entries(
    arr.reduce<Record<string, number>>((accum, note) => {
      if (accum[note]) {
        accum[note] += accum[note];
      } else {
        accum[note] = 1;
      }

      return accum;
    }, {})
  ).sort((a, b) => {
    return b[1] - a[1];
  });

  return noteFrequency[0];
};

interface IPossibleScale {
  name: string;
  mode: TMode;
}

const getPossibleScales = (notes: string[]) => {
  let possibleScales = Object.entries(majorScales);

  notes.forEach((note) => {
    const reducedScaleOptions = possibleScales.filter(([name, scale]) => {
      return scale.includes(note) || scale.includes(getEquivalentNote(note));
    });

    if (reducedScaleOptions.length > 0) {
      possibleScales = reducedScaleOptions;
    }
  });

  if (possibleScales.length <= 3) {
    return possibleScales;
  } else {
    return [];
  }
};

export const determineScaleFromNotes = ({
  melody = [],
  bass = [],
}: IDetermineScale) => {
  const combinedNotes = [...new Set([...melody, ...bass])];
  const possibleScales = getPossibleScales(combinedNotes);
  const notesByFrequency = determineTonicFromNotes(combinedNotes);

  if (possibleScales.length === 0) {
    return 'Not enough information to determine a scale';
  } else {
    if (possibleScales.length === 1) {
      const scale = possibleScales[0][1];
      const mostFrequentNote = scale.includes(notesByFrequency[0])
        ? notesByFrequency[0]
        : getEquivalentNote(notesByFrequency[0]);
      const frequentNoteDegree = scale[1].indexOf(mostFrequentNote);
      const scaleType = getModeName(modes[frequentNoteDegree]);

      return [`${mostFrequentNote} ${scaleType} !!!`];
    } else
      return possibleScales.map(([name]) => {
        return `${name} major`;
      });
  }
};
