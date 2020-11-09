import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  children: ReactNode
}
