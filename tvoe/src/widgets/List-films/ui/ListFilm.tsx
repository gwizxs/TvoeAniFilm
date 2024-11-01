'use client';

import React, { useEffect, useState } from 'react';
import { getNewMovies } from '@/entities/Cards-Film/api';
import { CardFilm } from '@/entities/Cards-Film';
import type { Movies } from '@/shared/api/Films/types';

export const ListFilm = () => {
  const [movies, setMovies] = useState<Movies | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getNewMovies();
        setMovies(response); // Assume response has the movies data
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {movies?.map((movie) => (
        <CardFilm key={movie.id} item={movie} />
      ))}
    </div>
  );
};
