import { Menu } from 'lucide-react';
import Link from 'next/link';

import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/shared/ui/sheet';
import { Button } from '@/shared/ui/button';
import { menu } from '@/shared/constants/menu';
import cl from './navbarMob.module.scss';

export const MobileNavBar = () => {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button variant={'link'}>
               <Menu />
            </Button>
         </SheetTrigger>
         <SheetContent
            side={'left'}
            className={cl.content}
            aria-describedby={undefined}
         >
            <SheetHeader>
               <SheetTitle>Меню</SheetTitle>
            </SheetHeader>
            <nav>
               <ul>
                  {menu.map((item, i) => (
                     <li className={cl.listitem} key={i}>
                        <Link href={item.url}>{item.text}</Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </SheetContent>
      </Sheet>
   );
};
