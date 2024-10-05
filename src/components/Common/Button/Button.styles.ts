import styled, { css } from "styled-components";
import { IProps } from "./Button.types";

export const ButtonWrapper = styled.button<IProps>`
  border: none;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  margin: 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  font-size: 14;
  font-weight: 500;
  ${({ variant }) => variant && variantStyles[variant]}
  ${({ size }) => size && sizeStyles[size]}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .sub-icon {
    vertical-align: top;
  }
`;

const variantStyles = {
  primary: css`
    background-color: transparent;
    color: #444444;
    border: 0.75px solid #6f6f6f;
    border-radius: 83px;
  `,
  secondary: css`
    background-color: #f4f0ef;
    color: #666666;
  `,
  tertiary: css`
    background-color: #d6d3d3;
    color: #666666;
  `,
  success: css`
    background-color: #28a745;
    color: #fff;
  `,
  successBorder: css`
    background-color: #fff;
    border: 1px solid #28a745;
    color: #28a745;
  `,
  danger: css`
    background-color: #d83d37;
    color: #fff;
  `,
  logout: css`
    background-color: #fff;
    color: #777070;
  `,
};

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 8px 16px;
  `,
  medium: css`
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};
