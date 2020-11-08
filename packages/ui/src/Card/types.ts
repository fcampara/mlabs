import { ReactNode, HTMLAttributes } from 'react'

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: ReactNode
}
