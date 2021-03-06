import { render } from '@testing-library/react';
import App from '../App';

test('renders an h1 element', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Menu/);
  expect(h1).toHaveTextContent('Menu');
});
