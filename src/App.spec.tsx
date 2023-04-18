import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '@/App';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('app', () => {
  it('render app', () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
