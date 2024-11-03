'use client';

import { CardFilm } from '@/entities/Cards-Film';


export const ListFilm = () => {


  return (
    <div>
      {movies?.map((movie) => (
        <CardFilm key={movie.id} item={movie} />
      ))}
    </div>
  );
};

