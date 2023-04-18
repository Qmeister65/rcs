import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '@/components/card';

describe('card', () => {
  it('render card', () => {
    const data = {
      num: '1',
      name: 'Большой шар с рисунком',
      count: '2',
      year: '1960',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    };
    render(<Card {...data} />);
    expect(screen.getByText(/желтый/i)).toBeInTheDocument();
  });
  it('render card with img', () => {
    const data = {
      num: '1',
      name: 'Большой шар с рисунком',
      count: '2',
      year: '1960',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
      src: '21312',
    };
    render(<Card {...data} />);
    expect(screen.getByText(/желтый/i)).toBeInTheDocument();
  });
});
