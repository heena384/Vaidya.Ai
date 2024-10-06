import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 80%; /* Set carousel width */
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 10px;
  transition: transform 0.5s ease-in-out;

  &.slick-center {
    z-index: 2; /* Bring the current slide on top */
    transform: scale(1.2); /* Enlarge the center image */
  }

  &.slick-active {
    z-index: 1;
  }

  &:not(.slick-center) {
    transform: scale(0.8); /* Shrink the non-center slides */
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;
