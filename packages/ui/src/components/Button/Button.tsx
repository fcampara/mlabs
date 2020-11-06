import React from 'react'
import { ButtonProps } from './types'
import { Button } from './styles'

export const ComponentButton: React.FC<ButtonProps> = ({
  label
}) => {
  return (
    <Button
      type="button"
    >
      {label}
    </Button>
  )
}

export default ComponentButton
