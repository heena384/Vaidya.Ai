import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import slide_image_1 from "../../../assets/image1.png";
import slide_image_2 from "../../../assets/image2.png";
import slide_image_3 from "../../../assets/image3.png";
import { StyledImageWrapper } from "../../../styles/global";

interface Slide {
  id: number;
  src: any;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: slide_image_1,
    alt: "Slide 1",
  },
  {
    id: 2,
    src: slide_image_2,
    alt: "Slide 2",
  },
  {
    id: 3,
    src: slide_image_3,
    alt: "Slide 3",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyledImageWrapper>
              <Image src={slide.src} alt={slide.alt} />
            </StyledImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
