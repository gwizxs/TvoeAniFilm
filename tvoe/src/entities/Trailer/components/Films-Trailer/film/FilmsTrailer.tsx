'use client'

import Image from 'next/image';
import cl from './FilmsTrailer.module.scss'
import LegendsOfLoana from '../assets/LegendsOfLoana.webp'
import Text from '../assets/TextLegendOfLoana.webp'

const FilmsTrailer = () => {
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

export default FilmsTrailer;
