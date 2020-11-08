import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Dialog, { DialogProps } from '../src/Dialog'
import Button from '../src/Button'

export default {
  title: 'Dialogs/Dialog',
  component: Dialog
} as Meta

const Template: Story<DialogProps> = ({ open }) => {
  const [isOpen, setOpen] = useState(open)

  return (
    <>
      <Button
        label="Open Dialog"
        onClick={() => setOpen(true)}
      />
      <Dialog open={isOpen}>
        <Button
          label="Close Dialog"
          onClick={() => setOpen(false)}
        />
      </Dialog>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  open: false
}
