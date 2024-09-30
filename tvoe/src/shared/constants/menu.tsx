import { ArrowDownToLine, House, Popcorn, Search, TicketSlash, Tv, TvMinimalPlay } from "lucide-react";

export const menu = [
    { text: 'Главная', url: '/main', icon: <House size={16} /> },
    { text: 'Фильмы', url: '/Movies', icon: <Popcorn size={16} /> },
    { text: 'Сериалы', url: '/Series', icon: <TvMinimalPlay size={16} />  },
    { text: 'ТВ', url: '/TV', icon: <Tv size={16} /> },
    { text: 'Установить', url: '/Install', icon:<ArrowDownToLine size={16} /> },
    { text: '7 дней за 0 Р', url: '/FreePeriod', icon: <TicketSlash size={16}/> },
    { text: 'Промокод', url: '/promocode', icon:  <TicketSlash size={16}/>},
    { text: 'Поиск', url: '', icon: <Search size={16} />},
 ];
 