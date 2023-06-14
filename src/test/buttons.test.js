import { fireEvent, render } from '@testing-library/react';
import Buttons from '../components/buttonsComponents';

test('it should call handleClick when button is clicked', () => {
  const mockHandleClick = jest.fn();
  const { getByText } = render(
    <Buttons
      className="test-class"
      value="test-value"
      handleClick={mockHandleClick}
    />,
  );
  const button = getByText('test-value');
  fireEvent.click(button);
  expect(mockHandleClick).toHaveBeenCalledTimes(1);
  expect(mockHandleClick).toHaveBeenCalledWith('test-value');
});
