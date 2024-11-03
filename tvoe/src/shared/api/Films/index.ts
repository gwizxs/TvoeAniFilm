import { FILMS_HOST } from '@/shared/constants/host';
import { createInstanceV2 } from '../base';
import { CURRENT_YEAR } from '@/shared/config/year';
import { Movie } from './types';


export const createInternalRequestFx = createInstanceV2({
  baseURL: process.env.INTERNAL_API_URL,
});


export const getMovie = async (): Promise<Movie[]> => {
  const response = await createInstanceV2.get<Movie[]>(`${FILMS_HOST}/movie`, {
    params: {
      'rating.kp': '5-9',
      year: CURRENT_YEAR,
      sortField: 'votes.filmCritics',
      sortType: '-1',
      limit: 15,
    },
  });

  return response.data;
};
