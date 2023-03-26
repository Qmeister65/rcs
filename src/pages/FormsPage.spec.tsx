import '@testing-library/jest-dom';
import React from 'react';
import FormsPage from './FormsPage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Forms page', () => {
  it('Render Forms page', () => {
    render(<FormsPage />);
    expect(screen.getByText(/название/i)).toBeInTheDocument();
  });
  it('', () => {
    render(<FormsPage />);
    fireEvent(screen.getByText(/submit/i), new MouseEvent('click'));
  });
});
