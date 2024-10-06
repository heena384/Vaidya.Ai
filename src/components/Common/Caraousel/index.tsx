// Carousel.tsx
import React from "react";
import Flickity from "react-flickity-component";
import styled, { keyframes } from "styled-components";

// Define Flickity options with appropriate types
const flickityOptions: Flickity.Options = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  pageDots: true,
  prevNextButtons: true,
  setGallerySize: false,
};

// Slide animation
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled component for the carousel container
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

// Styled component for each carousel item with background image
const CarouselItem = styled.div<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: 600px !important; // Enforce height with !important
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  animation: ${slideIn} 0.8s ease-out;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

// Overlay for the text
const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Carousel: React.FC = () => {
  return (
    <CarouselContainer>
      <Flickity
        className={"carousel"}
        options={flickityOptions}
        style={{ height: "600px" }}
      >
        {" "}
        {/* Enforce height on Flickity */}
        <CarouselItem bgImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=800&h=600&q=80">
          <OverlayText>Reliable information on all things health</OverlayText>
        </CarouselItem>
        <CarouselItem bgImage="https://images.unsplash.com/photo-1514516872535-1e5d40d28a9c?fit=crop&w=800&h=600&q=80">
          <OverlayText>Fitness tips and tricks</OverlayText>
        </CarouselItem>
        <CarouselItem bgImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=800&h=600&q=80">
          <OverlayText>Explore wellness topics</OverlayText>
        </CarouselItem>
        <CarouselItem bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fit=crop&w=800&h=600&q=80">
          <OverlayText>Nutrition guides and advice</OverlayText>
        </CarouselItem>
      </Flickity>
    </CarouselContainer>
  );
};

export default Carousel;
