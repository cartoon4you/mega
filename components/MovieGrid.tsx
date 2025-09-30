
import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieGridProps {
    movies: Movie[];
    onMovieSelect: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieSelect }) => {
    if (movies.length === 0) {
        return <div className="text-center text-gray-400 py-10">⚠️ لم يتم العثور على نتائج.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-5">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onClick={() => onMovieSelect(movie)} />
            ))}
        </div>
    );
};

export default MovieGrid;
