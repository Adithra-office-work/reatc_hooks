import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModeToggle from './ModeToggle';

describe('<ModeToggle />', () => {
  test('it should mount', () => {
    render(<ModeToggle />);
    
    const modeToggle = screen.getByTestId('ModeToggle');

    expect(modeToggle).toBeInTheDocument();
  });
});