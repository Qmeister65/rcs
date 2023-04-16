import '@testing-library/jest-dom';
import React from 'react';
import MainPage from '@/pages/MainPage';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

const mock = axios as jest.Mocked<typeof axios>;

describe('Main page', () => {
  it('render main page with error and loader', async () => {
    mock.get.mockRejectedValueOnce({ error: 'Error' });
    render(<MainPage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.getByTestId(/loader/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/SearchBar/i)).toBeInTheDocument();
    });
  });
  it('render main page with cards', async () => {
    mock.get.mockResolvedValueOnce({
      data: {
        docs: [
          {
            birth: '1',
            death: '2',
            realm: '3',
            spouse: '4',
            race: '5',
            gender: '6',
            hair: '7',
            height: '8',
            wiki: '9',
            _id: '0',
          },
        ],
      },
    });
    render(<MainPage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.getByTestId(/cards/i)).toBeInTheDocument();
      expect(screen.getByText(/5/i)).toBeInTheDocument();
    });
  });
});
