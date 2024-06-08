// src/components/Search.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './Search.css';

const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    const searchQuery = parsedQuery.query || '';
    setQuery(searchQuery);

    // Simulate a search operation
    if (searchQuery) {
      // Replace this with your actual search logic
      const dummyResults = [
        `Result 1 for "${searchQuery}"`,
        `Result 2 for "${searchQuery}"`,
        `Result 3 for "${searchQuery}"`,
      ];
      setResults(dummyResults);
    } else {
      setResults([]);
    }
  }, [location.search]);

  return (
    <div className="search-container">
      <h1 className="search-title">Search Results</h1>
      {query ? (
        <p className="search-query">Showing results for: <strong>{query}</strong></p>
      ) : (
        <p className="search-query">No search query provided.</p>
      )}
      <ul className="search-results">
        {results.length > 0 ? (
          results.map((result, index) => <li key={index}>{result}</li>)
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
