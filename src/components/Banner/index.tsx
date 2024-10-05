"use client";

import React from "react";

import { BannerContainer } from "./Banner.styles";
import Carousel from "../Common/Slider";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <div className="text">
        <span>Cure Your Curiosity</span>
        <br />
        <span>with Vaidya AI</span>
      </div>
    </BannerContainer>
  );
};

export default Banner;
