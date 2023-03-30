import '@testing-library/jest-dom';
import React from 'react';
import NotFoundPage from '@/pages/NotFoundPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Forms page', () => {
  it('Render Forms page', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/return/i)).toBeInTheDocument();
  });
});
