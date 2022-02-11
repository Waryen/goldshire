# Goldshire

Generate quotes from Warcraft universe!

## Installation

```
npm i goldshire
```

## Usage

### Generate a quote

```ts
import { generateQuote } from 'goldshire';

// optional parameter of type number, default to 1, describe the amount of quotes to generate.
const quote = generateQuote(3);
```

This function will return an object:

```ts
{
  id: 1,
  text: 'quote content', // the actual quote
  from: 1 // id of the character who told the quote
}
```

### Generate a character

```ts
import { generateCharacter } from 'goldshire';

// optional parameter of type number, default to 1, describe the amount of characters to generate.
const character = generateCharacter(3);
```

This function will return an object:

```ts
{
  character: {
    id: 1,
    name: "characters's name",
  },
  quotes: [
    {
      id: 1,
      text: 'a quote from this character'
    },
    // others quotes if any
  ]
}
```
