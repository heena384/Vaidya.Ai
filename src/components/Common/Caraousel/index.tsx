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
// import "./Caraousel.css";
import { IoIosArrowRoundBack } from "react-icons/io";

interface Slide {
  id: number;
  src: any;
  alt: string;
}

import slide_image_1 from "../../../assets/image1.png";
import slide_image_2 from "../../../assets/image2.png";
import slide_image_3 from "../../../assets/image3.png";
import slide_image_4 from "../../../assets/image4.png";
import Image from "next/image";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        autoplay={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <Image src={slide.src} alt="demo image" className="slide-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
