import React from 'react'
import clsx from 'clsx'
import { ButtonProps } from './types'
import { Button } from './styles'

export const ComponentButton: React.FC<ButtonProps> = ({
  label,
  children,
  type = 'button',
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={clsx(className, {
        'button--small': size === 'sm',
        'button--contained': variant === 'contained',
        'button--outline': variant === 'outline',
        'button--secondary': variant === 'secondary'
      })}
      type={type}
    >
      {children || label}
    </Button>
  )
}

export default ComponentButton
