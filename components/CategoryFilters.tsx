
import React from 'react';

interface CategoryFiltersProps {
    categories: string[];
    onFilter: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ categories, onFilter }) => {
    return (
        <div className="bg-[#1e1e1e] py-3 shadow-md shadow-black/50">
            <div className="flex gap-3 justify-center overflow-x-auto whitespace-nowrap px-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => onFilter(category)}
                        className="bg-[#e50914] text-white border-none py-2 px-4 rounded-full cursor-pointer transition duration-300 flex-shrink-0 hover:bg-[#b0060f]"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilters;
