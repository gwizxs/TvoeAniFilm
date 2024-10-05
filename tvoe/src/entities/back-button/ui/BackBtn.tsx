'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import cl from './back-btn.module.scss'
import { ChevronLeft } from 'lucide-react';

export function BackBtn() {
   const { back } = useRouter();

   return (
      <Button type='primary' shape="circle" icon={<ChevronLeft size={16} />} onClick={back} className={cl.btn}></Button>
   );
}
