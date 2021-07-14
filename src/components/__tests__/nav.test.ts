import nav from '../nav.svelte';
import { render } from '@testing-library/svelte';

describe('Nav', () => {
	it('Component rendered', async () => {
		const { container } = render(nav);
		const anchors = await container.getElementsByTagName('a');

		expect(anchors[0].textContent).toBe('Home');
		expect(anchors[1].textContent).toBe('About');
	});
});
