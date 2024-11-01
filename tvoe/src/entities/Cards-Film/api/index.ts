
import { Movies } from '@/shared/api/Films/types';
import { CURRENT_YEAR } from '@/shared/config/year';


export const getNewMovies = () =>
    createCommonRequestFx<Movies>({
        url: 'movie',
        params: {
            'rating.kp': '5-9',
            year: CURRENT_YEAR,
            sortField: 'votes.filmCritics',
            sortType: '-1',
            limit: 15,
        },
    })();
