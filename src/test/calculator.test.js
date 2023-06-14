import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/calculator';

test('it should display the result of a calculation when equals button is clicked', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);
  const button1 = getByText('2');
  const button2 = getByText('+');
  const button3 = getByText('3');
  const button4 = getByText('=');
  fireEvent.click(button1);
  fireEvent.click(button2);
  fireEvent.click(button3);
  fireEvent.click(button4);
  expect(getByDisplayValue('5')).toBeInTheDocument();
});
