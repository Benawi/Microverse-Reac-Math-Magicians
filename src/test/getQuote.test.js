import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import GetQuotes from '../Components/getQuote';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('GetQuotes', () => {
  test('renders correctly', async () => {
    render(<GetQuotes />);

    await waitFor(() => screen.getByText('Loading...'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays quote after successful API call', async () => {
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([{ quote: 'quote', author: 'author' }]),
    });

    render(<GetQuotes />);

    await waitFor(() => screen.getByText('quote - author'));

    expect(screen.getByText('quote - author')).toBeInTheDocument();
  });

  test('displays error message on API call failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('API Error'));

    render(<GetQuotes />);

    await waitFor(() => screen.getByText('API Error'));

    expect(screen.getByText('API Error')).toBeInTheDocument();
  });
});
