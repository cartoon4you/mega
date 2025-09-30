
import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="text-center my-8 px-4">
            <div className="flex justify-center items-center max-w-lg mx-auto">
                <input
                    type="text"
                    id="searchInput"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="🔍 ابحث عن أي فيلم أو فيديو..."
                    className="w-full text-black px-5 py-3 rounded-full border-none text-base outline-none shadow-md shadow-black/50 focus:ring-2 focus:ring-[#e50914]"
                />
                <button
                    onClick={handleSearch}
                    className="px-6 py-3 mr-2 border-none rounded-full bg-[#e50914] text-white cursor-pointer text-base transition duration-300 hover:bg-[#b0060f] hover:scale-105"
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
