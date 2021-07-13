type PokemanResponse = {
	status: number;
	body: any;
};

export const get = async ({ params }): Promise<PokemanResponse> => {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	return {
		status: 200,
		body: pokeman
	};
};
