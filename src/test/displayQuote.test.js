import { render, waitFor } from '@testing-library/react';
import GetQuotes from '../components/displayQuoate';

test('it should display a quote and its author', async () => {
  const mockData = [{ quote: 'test quote', author: 'test author' }];
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockData),
  }));
  const { getByText } = render(<GetQuotes />);
  await waitFor(() => expect(getByText('test quote')).toBeInTheDocument());
  expect(getByText('- test author')).toBeInTheDocument();
});
