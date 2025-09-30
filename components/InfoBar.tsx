
import React from 'react';

interface InfoBarProps {
    year?: string | number;
    quality?: 'HD' | 'SD';
}

const InfoBar: React.FC<InfoBarProps> = ({ year, quality }) => {
    if (!year && !quality) {
        return null;
    }

    return (
        <div className="max-w-4xl mx-auto bg-yellow-400 text-gray-900 rounded-lg p-3 my-4 shadow-lg flex items-center justify-center gap-6 font-bold">
            {year && (
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>سنة الإنتاج: {year}</span>
                </div>
            )}
            {quality && (
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-clapperboard"></i>
                    <span>الجودة: {quality}</span>
                </div>
            )}
        </div>
    );
}

export default InfoBar;
