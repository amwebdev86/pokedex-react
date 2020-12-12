import { getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders an h1 element', () => {
 const {getByText} =  render(<App />);
  const h1 = getByText(/Pokedex/);
  expect(h1).toBe('Pokedex');
});
