import { DialogHTMLAttributes, ReactNode } from 'react'

export interface DialogProps
  extends DialogHTMLAttributes<HTMLDialogElement> {
  children: ReactNode
}
