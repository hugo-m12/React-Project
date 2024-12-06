import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import locationsService from '../services/locationsService';

function Slideshow() {

  const [locations, setLocations] = useState([]);

  useEffect(function () {
    (async function () {
      const result = await locationsService.loadLocationsData();
      setLocations(result);
    })();
  }, []);
  
  return(
    <>
        <Swiper
          modules={[EffectFade]}
          effect='fade'
          slidesPerView={1}
          centeredSlides={true}
          pagination={{clickable: true}}
          navigation
        >
          {locations.map((item) => (
            item.LocationImages.map((image) => (
              <SwiperSlide > 
                  <img key={item.id} 
                       className='slider-image' 
                       src={image.path} 
                       alt='img'/>
              </SwiperSlide>  
          ))))}
        </Swiper>
    </>
  );
}

export default Slideshow;