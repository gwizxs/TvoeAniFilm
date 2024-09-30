import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/assets/styles/globals.scss';
import { Header } from '@/widgets/header';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
   title: 'Tvoe',
   description: 'Бесплатный сайт с фильмами и сериалами со всего мира в русской озвучке!',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru">
         <body className={inter.className}>
            <Header/>
            <main>{children}</main>
         </body>
      </html>
   );
}
