import React from 'react'
import { ButtonProps } from './types'
import { Button } from './styles'

export const ComponentButton: React.FC<ButtonProps> = ({
  label,
  fullWidth,
  variant
}) => {
  const variantClassName = variant ? `button--${variant}` : ''
  const fullWidthClassName = fullWidth ? 'full-width' : ''
  return (
    <Button
      className={[variantClassName, fullWidthClassName].join(' ')}
      type="button"
    >
      {label}
    </Button>
  )
}

export default ComponentButton
