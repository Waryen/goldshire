import { quotes, characters } from '../models/index';
import shuffle from 'lodash.shuffle';
import { Character } from '../types';

export const generateQuote = () => {
	const shuffledQuotes = shuffle(quotes);
	const quote = shuffledQuotes[0];
	const from = characters.find(
		(character: Character) => character.id == quote.from
	);
	return {
		quote: {
			id: quote.id,
			text: quote.text,
		},
		from,
	};
};
