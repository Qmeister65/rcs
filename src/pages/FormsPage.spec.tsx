import '@testing-library/jest-dom';
import React from 'react';
import FormsPage from '@/pages/FormsPage';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Forms page', () => {
  it('Render Forms page', () => {
    render(<FormsPage />);
    expect(screen.getByText(/название/i)).toBeInTheDocument();
  });
  it('Render errors in form', async () => {
    render(<FormsPage />);
    fireEvent(screen.getByText(/submit/i), new MouseEvent('click'));
  });
});
