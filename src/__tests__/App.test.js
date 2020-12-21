import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import App from '../App';
describe('component renders', () => {
  it('renders links on page', () => {
    const tree = TestRenderer.create(
      <Link className='App-btn-link-2' to='/'>
        Pokedex
      </Link>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
test('renders an h1 element', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Menu/);
  expect(h1).toHaveTextContent('Menu');
});
