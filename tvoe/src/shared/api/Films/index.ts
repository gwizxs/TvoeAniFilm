import { FILMS_HOST } from '@/shared/constants/host';
import { createInstanceV2 } from '../base';

export const createInternalRequestFx = createInstanceV2({
  baseURL: process.env.INTERNAL_API_URL,
});

export const createCommonRequestFx = createInstanceV2({
  baseURL: FILMS_HOST,
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KINO ?? '',
  },
});


