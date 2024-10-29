'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { menu } from '@/shared/constants/menu';
import { useState } from 'react';
import styles from './navbarMob.module.scss';
import { AlignJustify } from 'lucide-react';

export const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.menuButton, {
          [styles.menuButtonOpened]: isOpen,
        })}
        onClick={toggleMenu}
      >
        <AlignJustify className={styles.icon} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <ul className={clsx('list-reset', styles.list)}>
            {menu.map((item) => {
              return (
                <li
                  className={clsx(
                    styles.item,
                    { [styles.isCurrent]: item.url === window.location.pathname }
                  )}
                  key={item.text}
                >
                  <Link
                    className={styles.link}
                    href={item.url}
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

