import { ReactNode } from 'react';

export type TVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'successBorder'
  | 'danger'
  | 'logout';
export type TSize = 'small' | 'medium' | 'large';

export interface IProps {
  children: ReactNode;
  variant?: TVariant;
  size?: TSize;
  type?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  loader?: boolean;
  disabled?: boolean;
  openfilter?: boolean;
  ref?: any;
}

export interface DProps {
  variant?: TVariant;
  size?: TSize;
}
