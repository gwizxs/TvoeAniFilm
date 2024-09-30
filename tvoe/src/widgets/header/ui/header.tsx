
import { NavBar } from '../components/navbar';
import cl from './header.module.scss';
import { Logo } from '@/entities/logo';

export const Header = () => {
	return (
		<header className={cl.container}>
			<div className={cl.menu}>
				<Logo />
				<NavBar />
			</div>
		</header>
	);
}
