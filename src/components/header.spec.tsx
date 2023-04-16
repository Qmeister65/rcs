import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '@/components/header';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('header', () => {
  it('render header', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
