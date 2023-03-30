import '@testing-library/jest-dom';
import React from 'react';
import AboutPage from '@/pages/AboutPage';
import { render, screen } from '@testing-library/react';

describe('About page', () => {
  it('Render About page', () => {
    render(<AboutPage />);
    expect(screen.getByText(/project/i)).toBeInTheDocument();
  });
});
