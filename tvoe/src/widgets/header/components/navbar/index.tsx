'use client'

import Link from 'next/link';
import clsx from 'clsx';
import { useMobile } from '@/shared/hooks/useMobile';
import { menu } from '@/shared/constants/menu';
import { MobileNavBar } from '../navbar-mobile'
import s from './navbar.module.scss';
import { Button } from 'antd';

export const NavBar = () => {
   const isMobile = useMobile(640);

   if (isMobile) return <MobileNavBar />

   return (
      <nav className={s.nav}>
         <ul className={clsx('list-reset', s.list)}>
            {menu.map((item) => {
               return (
                  <li className={s.item} key={item.text}>
                     <Link
                        className={clsx(s.link, s.isCurrent)}
                        href={item.url}
                     >
                        <Button type='text'>
                           <span>{item.icon}</span>
                           <span>{item.text}</span>
                        </Button>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};

