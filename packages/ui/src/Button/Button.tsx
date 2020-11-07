import React from 'react'
import { ButtonProps } from './types'
import { Button } from './styles'

export const ComponentButton: React.FC<ButtonProps> = ({
  label,
  variant
}) => {
  const variantClassName = variant ? `button--${variant}` : ''
  return (
    <Button
      className={variantClassName}
      type="button"
    >
      {label}
    </Button>
  )
}

export default ComponentButton
