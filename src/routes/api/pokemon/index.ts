type Pokeman = {
	id: number;
	name: string;
	image: string;
};

type PokemonResponse = {
	status: number;
	body: Pokeman[];
};

export const get = async (): Promise<PokemonResponse> => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	const pokemon = data.results.map((data, idx) => {
		return {
			id: idx + 1,
			name: data.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				idx + 1
			}.png`
		};
	});
	return {
		status: 200,
		body: pokemon
	};
};
