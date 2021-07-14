import PokemanCard from '../pokemanCard.svelte';
import { render } from '@testing-library/svelte';

describe('Pokeman Card', () => {
	it('Component rendered', async () => {
		const pokeman = {
			id: 1,
			name: 'bulbasaur',
			image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
		};

		const { container } = render(PokemanCard, {
			props: { pokeman }
		});
		const image = await container.querySelector('img');
		const title = await container.querySelector('h2');

		expect(image.src).toBe(pokeman.image);
		expect(title.textContent).toBe('1. bulbasaur');
	});
});
