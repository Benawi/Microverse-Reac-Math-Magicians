import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../Components/buttonsComponents';

describe('Buttons', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Buttons type="button" value="Click me" className="primary" handleClick={() => {}} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('calls handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Buttons type="button" value="Click me" className="primary" handleClick={handleClick} />,
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
