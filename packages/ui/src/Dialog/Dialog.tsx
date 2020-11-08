import React, { useEffect, useRef } from 'react'
import { Dialog } from './styles'
import { DialogProps } from './types'

export const ComponentDialog: React.FC<DialogProps> = ({
  children,
  open
}) => {
  const dialog = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (open) return dialog.current?.showModal()
    dialog.current?.close()
  }, [open, dialog])

  return <Dialog ref={dialog}>{children}</Dialog>
}

export default React.memo(ComponentDialog)
