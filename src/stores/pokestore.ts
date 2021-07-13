import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async (limit: number): Promise<void> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  const fetched = data.results.map((data, idx) => {
    return {
      id: idx + 1,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        idx + 1
      }.png`,
    };
  });
  pokemon.set(fetched);
}

fetchPokemon(150);
