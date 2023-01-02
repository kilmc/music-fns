import { isScaleType } from '../modes/helpers';
import type { TScaleType } from '../types';

export const extractScaleName = (name: string): [string, TScaleType] | undefined => {
	const regex = new RegExp(/([A-G](?:b|#)?) (.*)/);
	const [pitchClass, scale] = name.match(regex)?.slice(1, 3) || [];
	const normalScale = scale.toLowerCase().replaceAll(' ', '-');

	if ((pitchClass || scale) === undefined) {
		console.log('Not a scale');
	}

	if (normalScale === 'major') {
		return [pitchClass, 'ionian'];
	}

	if (normalScale === 'minor') {
		return [pitchClass, 'aeolian'];
	}

	if (isScaleType(normalScale)) return [pitchClass, normalScale];
};
