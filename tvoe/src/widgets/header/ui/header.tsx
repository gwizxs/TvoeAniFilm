'use client'

import clsx from 'clsx';
import { NavBar } from '../components/navbar';
import s from './header.module.scss';
import { useHeaderFixed } from '../lib';

export const Header = () => {
	const { isFixed } = useHeaderFixed();
	return (
		<header
		className={clsx(s.header, {
		  [s.fixed]: isFixed,
		})}
	  >
		<div className={clsx('container', s.container)}>
		  <div className={s.row}>
			<NavBar />
		  </div>
		</div>
	  </header>
	);
}

