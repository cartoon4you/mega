
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-l from-[#e50914] to-[#b0060f] py-10 px-5 text-center shadow-lg shadow-black/60">
            <h1 className="text-4xl md:text-5xl font-bold m-0 text-white tracking-wider flex items-center justify-center gap-4">
                <i className="fa-solid fa-film"></i>
                <span>كرتون فور يو</span>
                <i className="fa-solid fa-film"></i>
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
                منصة مخصصة لمشاهدة أفلام ومسلسلات الكرتون بجودة عالية، مع إمكانية البحث والعرض المباشر.
            </p>
        </header>
    );
};

export default Header;
