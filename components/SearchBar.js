import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }; 

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search for a product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-2 border-blue-500 rounded-l px-4 py-2 w-1/2 focus:outline-none focus:border-purple-600"
      />
      <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-r">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
