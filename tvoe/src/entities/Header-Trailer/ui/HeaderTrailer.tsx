'use client'

import Image from 'next/image';
import cl from './HeaderTrailer.module.scss'
import LegendsOfLoana from '../header-trailer/LegendsOfLoana.webp'
import Text from '../header-trailer/TextLegendOfLoana.webp'

const HeaderTrailer = () => {
  return (
    <div className={cl.rootIMG}>
      <div className={cl.slide}>
        <Image
          src={LegendsOfLoana}
          alt="LegendsOfLoana"
          fill
          className={cl.image}
        />
        <div className={cl.text}> 
          <Image 
            src={Text} 
            alt="TextLegendOfLoana"
            className={cl.textImage} 
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTrailer;
