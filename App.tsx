
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategoryFilters from './components/CategoryFilters';
import MovieGrid from './components/MovieGrid';
import VideoPage from './components/VideoPage';
import Spinner from './components/Spinner';
import { searchMovies } from './services/archiveService';
import { Movie } from './types';
import { PRELOADED_MOVIES, CATEGORIES } from './constants';

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setMovies(PRELOADED_MOVIES);
        setIsLoading(false);
    }, []);

    const handleSearch = async (query: string) => {
        setIsLoading(true);
        setSelectedMovie(null);
        const results = await searchMovies(query);
        setMovies(results);
        setIsLoading(false);
    };

    const handleMovieSelect = (movie: Movie) => {
        setSelectedMovie(movie);
        window.scrollTo(0, 0);
    };

    const handleBackToGrid = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {selectedMovie ? (
                    <VideoPage movie={selectedMovie} onBack={handleBackToGrid} />
                ) : (
                    <>
                        <CategoryFilters categories={CATEGORIES} onFilter={handleSearch} />
                        <SearchBar onSearch={handleSearch} />
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <MovieGrid movies={movies} onMovieSelect={handleMovieSelect} />
                        )}
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default App;
