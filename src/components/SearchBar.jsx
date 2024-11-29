import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full mb-9 mt-2">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-100 placeholder-gray-400 focus:border-gray-500 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
