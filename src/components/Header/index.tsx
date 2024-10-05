"use client";

import React from "react";
import Image from "next/image";

import { HeaderContainer } from "./Header.styles";
import Button from "../Common/Button";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image
        className="icon"
        height={27}
        width={108}
        alt="search"
        src="/assets/logo.svg"
      />{" "}
      <div className="right-content">
        <Image
          className="icon"
          height={26}
          width={27}
          alt="search"
          src="/assets/translation-icon.svg"
        />{" "}
        <Button className="button-chat">Chat Now </Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
