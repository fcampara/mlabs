import React, { ButtonHTMLAttributes } from 'react'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  children: React.ReactDOM
}
