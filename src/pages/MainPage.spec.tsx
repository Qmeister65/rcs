import '@testing-library/jest-dom';
import React from 'react';
import MainPage from '@/pages/MainPage';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '@/utils/test-utils';

describe('Main page', () => {
  it('render main page with loader', async () => {
    renderWithProviders(<MainPage />);
    await waitFor(() => {
      expect(screen.getByTestId(/loader/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/SearchBar/i)).toBeInTheDocument();
    });
  });
  it('render main page with cards', async () => {
    renderWithProviders(<MainPage />);
    await waitFor(() => {
      expect(screen.getByTestId(/cards/i)).toBeInTheDocument();
      expect(screen.getByText(/5/i)).toBeInTheDocument();
    });
  });
});
