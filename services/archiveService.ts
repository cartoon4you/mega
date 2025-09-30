
import { Movie } from '../types';

export const searchMovies = async (query: string): Promise<Movie[]> => {
    try {
        const response = await fetch(`https://archive.org/advancedsearch.php?q=${encodeURIComponent(query)}&fl[]=identifier,title,description&rows=20&page=1&output=json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const docs = data.response.docs;

        if (!docs || docs.length === 0) {
            return [];
        }

        return docs.map((item: any): Movie => ({
            id: item.identifier,
            title: item.title || 'بدون عنوان',
            description: item.description || 'بدون وصف متاح',
            img: `https://archive.org/services/img/${item.identifier}`,
            // Year and quality are not available from this basic search API
        }));
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        return [];
    }
};
