'use client';
import Image from 'next/image';
import Link from 'next/link';
import type { MovieEntity } from '@/shared/api/Films/types';
import styles from './CardFilm.module.scss';
import { paths } from '@/shared/routing/paths';
import { movieStore } from '@/shared/store/api/films-store/films-card-store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

export const CardFilm = observer(() => {
  useEffect(() => {
    movieStore.getMoviesAction();
  }, []);

  const movies = movieStore.moviesData?.value;

  const displayedMovies = Array.isArray(movies) ? movies.slice(1, 15) : [];

  return (
    <section>
      {displayedMovies.map((movie) => (
        <Link key={movie.id} className={styles.item} href={paths.movie(movie.id)}>
          <div className={styles.imageWrapper}>
            {movie.id ? (
              <Image
                alt={movie.name ?? ''}
                className={styles.image}
                fill
                quality={100}
                sizes="100%"
                src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`}
              />
            ) : null}
          </div>
          <div className={styles.content}>
            <h3 className={styles.name}>{movie.name}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
});
