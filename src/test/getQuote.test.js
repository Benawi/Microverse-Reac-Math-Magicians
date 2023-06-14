/* eslint-disable import/no-extraneous-dependencies */
import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import GetQuotes from '../components/getQuote';

test('it should render a quote when successfully fetching data from the API', async () => {
  const server = setupServer(
    rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(
      ctx.json([
        {
          quote: 'test quote',
          author: 'test author',
        },
      ]),
    )),
  );
  server.listen();
  const { getByText } = render(<GetQuotes />);
  await waitFor(() => expect(getByText('test quote - test author')).toBeInTheDocument());
  server.close();
});
