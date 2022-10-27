import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPart from './LoginPart';

describe('<LoginPart />', () => {
  test('it should mount', () => {
    render(<LoginPart />);
    
    const loginPart = screen.getByTestId('LoginPart');

    expect(loginPart).toBeInTheDocument();
  });
});