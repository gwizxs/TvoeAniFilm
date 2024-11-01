import { createCommonRequestFx } from '@/shared/api/Films/index';
import type { Movies } from '@/shared/api/Films/types';
import { GenresEnum } from '@/shared/config/enums';
import { CURRENT_YEAR } from '@/shared/config/year';


export const comedyMoviesRequestFx = createCommonRequestFx<void, Movies>({
    url: '/v1.3/movie',
    params: {
        year: CURRENT_YEAR,
        type: 'movie',
        name: '!null',
        'rating.kp': '7-10',
        'votes.kp': '!null',
        'poster.previewUrl': '!null',
        'genres.name': GenresEnum.Comedy,
        limit: 15,
    },
});

export const familyMoviesRequestFx = createCommonRequestFx<void, Movies>({
    url: '/v1.3/movie',
    params: {
        'genres.name': GenresEnum.Family,
        'poster.previewUrl': '!null',
        year: CURRENT_YEAR,
        name: '!null',
        sortField: 'votes.imdb',
        sortType: '-1',
        limit: 15,
    },
});

export const dramaMoviesRequestFx = createCommonRequestFx<void, Movies>({
    url: '/v1.3/movie',
    params: {
        year: CURRENT_YEAR,
        'genres.name': GenresEnum.Drama,
        'poster.previewUrl': '!null',
        name: '!null',
        sortField: 'votes.kp',
        sortType: '-1',
        limit: 15,
    },
});

export const fantasticMoviesRequestFx = createCommonRequestFx<void, Movies>({
    url: '/v1.3/movie',
    params: {
        'genres.name': GenresEnum.ScienceFiction,
        'poster.previewUrl': '!null',
        year: CURRENT_YEAR,
        name: '!null',
        sortField: 'votes.kp',
        sortType: '-1',
        limit: 15,
    },
});