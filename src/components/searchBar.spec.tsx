import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '@/components/searchBar';
import { BrowserRouter } from 'react-router-dom';

describe('search bar', () => {
  it('search bar click', () => {
    const searchFunc = jest.fn();
    render(<SearchBar searchFunc={searchFunc} />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByTestId(/btn/i));
    expect(searchFunc).toHaveBeenCalled();
  });
});
