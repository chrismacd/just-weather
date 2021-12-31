import { renderHook } from '@testing-library/react-hooks';
import useFilterCities from './useFilterCities';

describe('useFilterCities', () => {
  test('Default value of `data` will be null', () => {
    const { result } = renderHook(() => useFilterCities(''));

    expect(result.current.data).toBe(null);
  });

  test('Value of `data` of length 2 will be null', () => {
    const { result } = renderHook(() => useFilterCities('jo'));

    expect(result.current.data).toBeNull();
  });

  test('City data is returned with case insensitive input', () => {
    const expected = {
      coord: { lat: -26.202271, lon: 28.043631 },
      country: 'ZA',
      id: 993800,
      name: 'Johannesburg',
      state: '',
    };
    const { result } = renderHook(() => useFilterCities('joHANNESburg'));

    expect(result.current.data).toContainEqual(expected);
  });

  test('City data is not returned with invalid input', () => {
    const expected = {
      coord: { lat: -26.202271, lon: 28.043631 },
      country: 'ZA',
      id: 993800,
      name: 'Johannesburg',
      state: '',
    };
    const { result } = renderHook(() => useFilterCities('burg'));

    expect(result.current.data).not.toContainEqual(expected);
  });
});
