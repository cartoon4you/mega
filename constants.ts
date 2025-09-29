
import { Movie } from './types';

export const PRELOADED_MOVIES: Movie[] = [
    {
        id: 'detective-conan-movie-27',
        title: 'فيلم 27: نجم المليون دولار',
        description: 'المتحري الصغير سينشي كودو يواجه تحديات جديدة مع جريمة متعلقة بمليون دولار.',
        img: 'https://archive.org/services/img/detective-conan-movie-27',
        year: 2024,
        quality: 'HD'
    },
    {
        id: '25-waifu-2x-1920x-1080',
        title: 'فيلم 25: عروس شيبويا',
        description: 'فيلم مدبلج بالعربية عن قضية غامضة في حي شيبويا.',
        img: 'https://archive.org/services/img/25-waifu-2x-1920x-1080',
        year: 2022,
        quality: 'HD'
    },
    {
        id: 'SPGO-260',
        title: 'فيلم 22: Zero the Enforcer',
        description: 'تحقيق كونان في انفجار غامض خلال افتتاح منتجع كبير في طوكيو.',
        img: 'https://archive.org/services/img/SPGO-260',
        year: 2018,
        quality: 'SD'
    }
];

export const CATEGORIES: string[] = ['كونان', 'أنمي', 'أكشن', 'كوميديا'];
