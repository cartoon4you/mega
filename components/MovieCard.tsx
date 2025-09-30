
import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
    movie: Movie;
    onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group bg-[#1e1e1e] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black/60 cursor-pointer relative flex flex-col"
        >
            <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-72 object-cover block border-b-4 border-[#e50914]"
            />
            <div className="p-3 flex-grow flex flex-col">
                <h2 className="text-base font-bold mb-2 text-white bg-yellow-500/20 p-2 rounded-md">
                    {movie.title}
                </h2>
                <p className="text-sm text-gray-400 h-10 overflow-hidden">
                    {movie.description}
                </p>
            </div>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <span className="text-lg font-bold text-white">تشغيل</span>
            </div>
        </div>
    );
};

export default MovieCard;
