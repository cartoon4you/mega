
import React from 'react';
import { Movie } from '../types';
import InfoBar from './InfoBar';

interface VideoPageProps {
    movie: Movie;
    onBack: () => void;
}

const VideoPage: React.FC<VideoPageProps> = ({ movie, onBack }) => {
    const videoSrc = `https://archive.org/embed/${movie.id}`;
    
    return (
        <div className="p-5 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-white bg-yellow-500/20 p-3 rounded-md max-w-4xl mx-auto">
                {movie.title}
            </h2>

            <InfoBar year={movie.year} quality={movie.quality} />

            <div className="max-w-4xl mx-auto shadow-2xl shadow-black/80 rounded-xl overflow-hidden">
                <iframe
                    id="videoFrame"
                    src={videoSrc}
                    className="w-full aspect-video border-none"
                    allowFullScreen
                ></iframe>
            </div>

            <p className="text-gray-300 text-base max-w-3xl mx-auto my-6 leading-relaxed">
                {movie.description}
            </p>

            <button
                onClick={onBack}
                className="block mx-auto py-2 px-6 border-none rounded-full bg-[#e50914] text-white text-lg cursor-pointer transition duration-300 hover:bg-[#b0060f] hover:scale-105"
            >
                <i className="fa-solid fa-arrow-right ml-2"></i>
                العودة للقائمة
            </button>
        </div>
    );
};

export default VideoPage;
