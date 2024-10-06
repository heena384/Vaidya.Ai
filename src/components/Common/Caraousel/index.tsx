// Carousel.tsx

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Caraousel.css"; // Custom CSS for styling

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: "https://via.placeholder.com/800x400?text=Slide+1",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/800x400?text=Slide+2",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/800x400?text=Slide+3",
    alt: "Slide 3",
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.src} alt={slide.alt} className="slide-image" />
              <div className="slide-number">
                {activeIndex + 1} of {slides.length}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
