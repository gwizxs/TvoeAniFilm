import Link from 'next/link';

import cl from './logo.module.scss';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';

export const Logo = () => {
   return (
      <Link href={'/'} className={cl.logo}>
         <div className={cl.svg}>
            <LogoIcon />
         </div>
      </Link>
   );
};
