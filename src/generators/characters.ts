import { characters, quotes } from '../models/index';
import shuffle from 'lodash.shuffle';

export const generateCharacter = () => {
  const shuffledCharacters = shuffle(characters);
  const character = shuffledCharacters[0];
  const quotesFrom = quotes
    .filter((quote) => quote.from == character.id)
    .map((quote) => {
      const { from, ...rest } = quote;
      return rest;
    });
  return {
    character,
    quotes: quotesFrom,
  };
};
