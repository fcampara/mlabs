import React from 'react'
import { ButtonProps } from './types'
import { Button } from './styles'
// import './button.css'

export const ComponentButton: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  )
}

export default ComponentButton
