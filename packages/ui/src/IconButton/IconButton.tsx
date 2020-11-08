import React from 'react'
import { IconButtonProps } from './types'
import { IconButton } from './styles'
import clsx from 'clsx'

export const ComponentIconButton: React.FC<IconButtonProps> = ({
  type = 'button',
  selected,
  children,
  className,
  ...props
}) => {
  return (
    <IconButton
      className={clsx(className, {
        'icon-button__selected': selected
      })}
      type={type}
      {...props}
    >
      {children}
    </IconButton>
  )
}

export default ComponentIconButton
