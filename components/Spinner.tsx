
import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#e50914]"></div>
            <p className="mr-4 text-lg">⏳ جارٍ التحميل...</p>
        </div>
    );
};

export default Spinner;
