import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import SearchBar from '@/components/searchBar';
import { renderWithProviders } from '@/utils/test-utils';

describe('search bar', () => {
  it('search bar click', () => {
    const searchFunc = jest.fn();
    renderWithProviders(<SearchBar searchFunc={searchFunc} />);
    fireEvent.click(screen.getByTestId(/btn/i));
    expect(searchFunc).toHaveBeenCalled();
  });
  it('search bar enter', () => {
    const searchFunc = jest.fn();
    renderWithProviders(<SearchBar searchFunc={searchFunc} />);
    fireEvent.keyDown(screen.getByTestId('btn'), { key: 'Enter' });
    expect(searchFunc).toHaveBeenCalled();
  });
  it('search bar chang input value', () => {
    renderWithProviders(<SearchBar />);
    fireEvent.change(screen.getByTestId('search-bar__input'), { target: { value: 'test value' } });
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
