// inferred
const pokemonList = ["bulbasaur", "squirtle", "charmander"];
const dates = [new Date(), new Date()];

// need to annotate if empty array
const numberArray: number[][] = [];

// purpose of learning array typescript
// Helps with inference when extracting values
const pokemon = pokemonList[0];
const myPokemon = pokemonList.pop();

// Prevents incompatible values
// pokemonList.push(100);

// Helps with 'map'
// autocomplete methods and properties
pokemonList.map((pokemon: string): string => {
  return pokemon.toUpperCase();
});

// Flexible
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2010-12-13");
importantDates.push(new Date());
