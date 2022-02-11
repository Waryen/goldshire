import { characters, quotes } from '../models/index';
import shuffle from 'lodash.shuffle';
import { GeneratedCharacter } from '..';

const shuffleCharacter = (): GeneratedCharacter => {
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

export const generateCharacter = (amount = 1) => {
  let data: undefined | GeneratedCharacter | GeneratedCharacter[] = undefined;
  let error: null | string = null;

  if (amount <= 0) {
    error = `Parameter should be over 0.`;
  }
  if (amount > characters.length) {
    error = `Parameter should be between 1 and ${characters.length}`;
  }
  if (amount == 1) {
    data = shuffleCharacter();
  }
  if (!error) {
    data = [];
    for (let i = 0; i < amount; i++) {
      data.push(shuffleCharacter());
    }
  }

  return { data, error };
};
