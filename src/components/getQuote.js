import React, { useState, useEffect } from 'react';

const GetQuotes = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-API-KEY': 'wgqoWSBb+7LUnDU+0rdQbg==z52hb2b7sHnKywRR' },
        });
        const data = await response.json();
        setQuote(`${data[0].quote} - ${data[0].author}`);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="quotes-container">
      <p>{isLoading ? 'Loading...' : (error || quote)}</p>
    </div>
  );
};

export default GetQuotes;
