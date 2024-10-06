import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContainer, ImageWrapper, StyledImage } from "./Slider.styles";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px", // Remove extra padding
  focusOnSelect: true, // Enable focus on selected slide
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = ({ SliderData }: any) => {
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {SliderData.map((slide, index) => (
          <ImageWrapper key={index}>
            <StyledImage src={slide.image} alt={`Slide ${index}`} />
          </ImageWrapper>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
