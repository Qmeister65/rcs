import '@testing-library/jest-dom';
import React from 'react';
import MainPage from '@/pages/MainPage';
import { render, screen } from '@testing-library/react';

describe('Main page', () => {
  it('render main page', () => {
    const { container } = render(<MainPage />);
    expect(screen.getByPlaceholderText(/SearchBar/i)).toBeInTheDocument();
    expect(container.getElementsByClassName('cardsList')[0]).toBeInTheDocument();
  });
});
