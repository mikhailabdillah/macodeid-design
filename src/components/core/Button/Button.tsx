import React, { ButtonHTMLAttributes, JSXElementConstructor } from 'react'
import cn from 'clsx'
import s from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'filled' | 'outlined'
  color?: 'primary' | 'secondary'
  type?: 'button' | 'reset' | 'submit'
  size?: 'small' | 'normal' | 'large'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | JSXElementConstructor<any>
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  color,
  size,
  type = 'button',
  Component = 'button',
  children,
  ...rest
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.filled]: variant === 'filled',
      [s.outlined]: variant === 'outlined',
    },
    {
      [s.primary]: color === 'primary',
      [s.secondary]: color === 'secondary',
    },
    {
      [s.small]: size === 'small',
      [s.large]: size === 'large',
    },
    className
  )

  return (
    <Component className={rootClassName} {...rest} type={type}>
      <span>{children}</span>
    </Component>
  )
}

export default Button
