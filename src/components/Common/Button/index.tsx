import React from "react";
import Image from "next/image";

import { ButtonWrapper } from "./Button.styles";
import { IProps } from "./Button.types";

const Button: React.FC<IProps> = ({
  variant = "primary",
  size = "medium",
  children,
  disabled,
  ...props
}) => {
  return (
    <ButtonWrapper size={size} variant={variant} disabled={disabled} {...props}>
      {children}
      <div className="icon-wrapper">
        <Image
          className="icon"
          height={9}
          width={9}
          alt="search"
          src="/assets/arrow-icon.svg"
        />
        <Image
          className="sub-icon"
          height={9}
          width={9}
          alt="search"
          src="/assets/arrow-icon-2.svg"
        />
      </div>
    </ButtonWrapper>
  );
};

export default Button;
