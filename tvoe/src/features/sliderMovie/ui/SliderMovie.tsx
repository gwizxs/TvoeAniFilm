'use client'

import Slider from "react-slick";

import cl from './SliderMovie.module.scss'; 

const SliderMovie = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false 
  };


  return (
    <div className={cl.sliderContainer}> 
      <Slider {...settings}>
<div>
  errepolgtkeriopg
</div>
      </Slider>
    </div>
  );
};

export default SliderMovie;
