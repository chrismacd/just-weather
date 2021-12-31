import { render, screen } from '@testing-library/react';
import App from './App';

test('renders favourites heading', () => {
  render(<App />);
  const heading = screen.getByText(/your favourites/i);
  expect(heading).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/search for a city/i);
  expect(input).toBeInTheDocument();
});
