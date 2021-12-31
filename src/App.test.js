import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders favourites heading', () => {
  render(<App />);
  const heading = screen.getByText(/your favourites/i);
  expect(heading).toBeInTheDocument();
});

describe('tests search input', () => {
  test('renders search input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/search for a city/i);
    expect(input).toBeInTheDocument();
  });

  test('search result should be visible', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/search for a city/i);
    fireEvent.change(input, { target: { value: 'joh' } });

    await waitFor(() => {
      expect(screen.getByText('Johannesburg')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Johannesburg'));

    await waitFor(() =>
      expect(screen.getByText('Humidity')).toBeInTheDocument()
    );
  });

  test('search result should not be visible', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/search for a city/i);
    fireEvent.change(input, { target: { value: 'burg' } });
    await waitFor(() =>
      expect(screen.queryByText('Johannesburg')).not.toBeInTheDocument()
    );
  });
});
