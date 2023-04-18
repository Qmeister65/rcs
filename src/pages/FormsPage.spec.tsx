import '@testing-library/jest-dom';
import React from 'react';
import FormsPage from '@/pages/FormsPage';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '@/utils/test-utils';

describe('Forms page', () => {
  it('Render Forms page', () => {
    renderWithProviders(<FormsPage />);
    expect(screen.getByText(/название/i)).toBeInTheDocument();
  });
  it('Render errors in form', async () => {
    renderWithProviders(<FormsPage />);
    fireEvent(screen.getByText(/submit/i), new MouseEvent('click'));
    await waitFor(() => {
      expect(screen.getByText(/name should not be empty/i)).toBeInTheDocument();
    });
  });
});
