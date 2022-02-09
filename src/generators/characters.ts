import { characters, quotes } from '../models/index';
import shuffle from 'lodash.shuffle';

export const generateCharacter = () => {
	const shuffledCharacters = shuffle(characters);
	const character = shuffledCharacters[0];
	const quotesFrom = quotes.filter((quote) => quote.from == character.id);
	return {
		character,
		quotes: quotesFrom,
	};
};
