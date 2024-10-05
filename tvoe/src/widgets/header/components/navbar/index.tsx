'use client'

import Link from 'next/link';
import { useMobile } from '@/shared/hooks/useMobile';
import { menu } from '@/shared/constants/menu';
import { MobileNavBar } from '../navbar-mobile'
import cl from './navbar.module.scss';
import { Button } from 'antd';

export const NavBar = () => {
   const isMobile = useMobile(640);

   if (isMobile) return <MobileNavBar />

   return (
      <nav>
         <ul className={cl.links}>
            {menu.map((item, i) => (
               <li key={i}>
                  <Link href={item.url} className={cl.link}>
                     <Button type='text' className={cl.icons}>
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                     </Button>

                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

