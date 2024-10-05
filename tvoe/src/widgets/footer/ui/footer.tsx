'use client'
import Link from 'next/link';

import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { Logo } from '@/entities/logo';
import cl from './footer.module.scss';

export const Footer = () => {
   return (
      <footer className={cl.footer}>
         <div className={cl.main}>
            <div>
               <Logo />
               <h2 className={cl.copyrights}>&copy; 2024 TvoeAniFilm</h2>
               <p className={cl.info}>
                  Весь материал на сайте представлен исключительно для бесплатного
                  домашнего ознакомительного просмотра.
               </p>
               <p className={cl.source}>
                  Основной материал взят с: {' '}
                  <Link
                     className='p-1'
                     target='_blank'
                     href={'https://anilibria.top'}
                  >
                     AniLibria |
                  </Link>
                  <Link
                     className='p-1'
                     target='_blank'
                     href={'https://www.kinopoisk.ru/'}
                  >
                     Кинопоиск
                  </Link>
               </p>
            </div>
            <LogoIcon color={'rgb(33 47 58 / .1)'} size={200} />
         </div>
         <hr />
      </footer>
   );
};
