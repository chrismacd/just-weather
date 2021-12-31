import { render, screen } from '@testing-library/react';
import App from './App';

test('renders favourites heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/your favourites/i);
  expect(headingElement).toBeInTheDocument();
});
