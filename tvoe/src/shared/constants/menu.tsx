import { House, Popcorn, Search, TicketSlash, Tv, TvMinimalPlay } from "lucide-react";

export const menu = [
    { text: 'Главная', url: '/main', icon: <House size={16} /> },
    { text: 'Фильмы', url: '/Movies', icon: <Popcorn size={16} /> },
    { text: 'Сериалы', url: '/Series', icon: <TvMinimalPlay size={16} />  },
    { text: 'Аниме', url: '/Anime/franchise', icon: <Tv size={16} /> },
    { text: 'Промокод', url: '/promocode', icon:  <TicketSlash size={16}/>},
    { text: 'Поиск', url: '', icon: <Search size={16} />},
 ];
 