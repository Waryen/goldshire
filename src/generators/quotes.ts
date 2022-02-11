import { quotes, characters } from '../models/index';
import shuffle from 'lodash.shuffle';
import { GeneretedQuote } from '..';

const shuffleQuote = (): GeneretedQuote => {
  const shuffledQuotes = shuffle(quotes);
  const quote = shuffledQuotes[0];
  const from = characters.find((character) => character.id == quote.from);
  return {
    quote: {
      id: quote.id,
      text: quote.text,
    },
    from,
  };
};

export const generateQuote = (amount = 1) => {
  let data: undefined | GeneretedQuote | GeneretedQuote[] = undefined;
  let error: null | string = null;

  if (amount <= 0) {
    error = `Parameter should be over 0.`;
  }
  if (amount > quotes.length) {
    error = `Parameter should be between 1 and ${quotes.length}`;
  }
  if (amount == 1) {
    data = shuffleQuote();
  }
  if (!error) {
    data = [];
    for (let i = 0; i < amount; i++) {
      data.push(shuffleQuote());
    }
  }

  return { data, error };
};
