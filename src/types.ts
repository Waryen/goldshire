export type Quote = {
  id: number;
  text: string;
  from: number;
};

export type GeneretedQuote = {
  quote: {
    id: number;
    text: string;
  };
  from: Character | undefined;
};

export type Character = {
  id: number;
  name: string;
};

export type GeneratedCharacter = {
  character: Character;
  quotes: {
    id: number;
    text: string;
  }[];
};
