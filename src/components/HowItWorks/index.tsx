"use client";

import React from "react";

import { WorkContainer } from "./HowItWorks.styles";

const HowItWorks: React.FC = () => {
  return (
    <WorkContainer>
      <div className="text">
        <span>How Vaidya works</span>
        <br />
        <span>for you </span>
      </div>
      <div className="mobile-view h-40" />
    </WorkContainer>
  );
};

export default HowItWorks;
