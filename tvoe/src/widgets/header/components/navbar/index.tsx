'use client'

import Link from 'next/link';
import clsx from 'clsx';
import { useMobile } from '@/shared/hooks/useMobile';
import { menu } from '@/shared/constants/menu';
import { MobileNavBar } from '../navbar-mobile'
import s from './navbar.module.scss';
import { Button } from 'antd';
import { motion } from 'framer-motion';

export const NavBar = () => {
   const isMobile = useMobile(640);

   if (isMobile) return <MobileNavBar />

   return (

<motion.nav
  className={s.nav}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <ul className={clsx('list-reset', s.list)}>
    {menu.map((item) => (
      <motion.li
        className={s.item}
        key={item.text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        <Link className={clsx(s.link, s.isCurrent)} href={item.url}>
          <Button type='text'>
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </Button>
        </Link>
      </motion.li>
    ))}
  </ul>
</motion.nav>
   );
};

