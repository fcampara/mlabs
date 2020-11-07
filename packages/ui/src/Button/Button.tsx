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
  ...props
}) => {
  return (
    <Button
      {...props}
      className={clsx(className, {
        'button--contained': variant === 'contained',
        'button--outline': variant === 'outline',
        'button--secondary': variant === 'secondary'
      })}
      type={type}
    >
      {label || children}
    </Button>
  )
}

export default ComponentButton
