import { Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;

    .toast-container {
      z-index: 9;
      position: fixed;
      top: 10px !important;
      right: 10px !important;
    }
  }
.swiper_container {
  height: 52rem;
  padding: 2rem 0;
  position: relative;
}

.swiper-slide {
  width: 37rem;
  height: 42rem;
  position: relative;
}

@media (max-width: 500px) {
  .swiper_container {
    height: 47rem;
  }
  .swiper-slide {
    width: 28rem !important;
    height: 36rem !important;
  }
  .swiper-slide img {
    width: 28rem !important;
    height: 36rem !important;
  }
}

.swiper-slide img {
  width: 37rem;
  height: 42rem;
  border-radius: 2rem;
  object-fit: cover;
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.slider-controler {
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-next {
    left: 80% !important;
    transform: translateX(-80%) !important;
  }
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-prev {
    left: 20% !important;
    transform: translateX(-20%) !important;
  }
}

.slider-controler .slider-arrow {
  background: var(--white);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow ion-icon {
  font-size: 2rem;
  color: #222224;
}

.slider-controler .slider-arrow::after {
  content: '';
}

.swiper-pagination {
  position: relative;
  width: 15rem !important;
  bottom: 1rem;
}

.swiper-pagination .swiper-pagination-bullet {
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.swiper-pagination .swiper-pagination-bullet-active {
  background: var(--primary);
}
`;

export default GlobalStyle;

export const LayoutContainer = styled(Container)`
  margin-top: 80px;
  background: linear-gradient(180deg, #017db9 0%, #003853 100%);
  padding: 0px;
  font-family: "Poppins", sans-serif;

  .content {
    height: 100%;
    min-height: calc(100vh - 80px);
  }

  .desktop-view {
    display: block;
  }

  .mobile-view {
    display: none;
  }
  @media screen and (max-width: 450px) {
    margin-top: 30px;
    .content {
      background: #fff;
    }

    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: block;
    }
  }
`;

export const InitialsText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
