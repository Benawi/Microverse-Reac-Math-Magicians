import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.api-ninjas.com/v1/quotes?category = computers';
const GetQuotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
   
};

export default GetQuotes;
