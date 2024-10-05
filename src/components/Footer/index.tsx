"use client";

import React from "react";
import Image from "next/image";

import { FooterContainer } from "./Footer.styles";
import Button from "../Common/Button";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="content">
        <div className="text">
          <span>Try Vaidya.AI</span>
        </div>
        <div className="chat-btn">
          <Button>Chat now</Button>
        </div>
      </div>
      <div className="fractal-footer">
        <Image
          className="icon"
          height={55}
          width={130}
          alt="search"
          src="/assets/fractal-logo.svg"
        />
        <p>All rights reserved © 2024 Fractal Analytics Inc.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
