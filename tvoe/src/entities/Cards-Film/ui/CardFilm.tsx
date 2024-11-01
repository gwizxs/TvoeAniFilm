'use client'
import Image from 'next/image';
import Link from 'next/link';
import type { MovieEntity } from '@/shared/api/Films/types';
import styles from './CardFilm.module.scss';
import { paths } from '@/shared/routing/paths';

interface MovieItemProps {
  item: Partial<MovieEntity>;
  rating?: number | null;
  small?: boolean;
}
export const CardFilm = ({ item, small }: MovieItemProps) => {
  return (
    <Link className={styles.item} href={paths.movie(item?.id)}>
      <div className={styles.imageWrapper}>
        {item?.id ? (
          <Image
            alt={item?.name ?? ''}
            className={styles.image}
            fill
            quality={100}
            sizes="100%"
            src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item?.id}.jpg`}
          />
        ) : null}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{item?.name}</h3>
        {!small && (
          <div className={styles.info}>
            <span className={styles.year}>{item?.year}</span>
          </div>
        )}
      </div>
    </Link>
  );
};