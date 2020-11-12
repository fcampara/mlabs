import React, { useEffect, useRef } from 'react'
import { Dialog } from './styles'
import { DialogProps } from './types'

export const ComponentDialog: React.FC<DialogProps> = ({
  open,
  children,
  ...props
}) => {
  const dialog = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (open) return dialog.current?.showModal()
    dialog.current?.close()
  }, [open, dialog])

  console.log(props)
  return (
    <Dialog {...props} ref={dialog}>
      {children}
    </Dialog>
  )
}

export default React.memo(ComponentDialog)
