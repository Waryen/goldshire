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

const quote = generateQuote();
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

const character = generateCharacter();
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
