import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../src/Button'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  label: 'Button'
}

export const Seconday = Template.bind({})
Seconday.args = {
  variant: 'secondary',
  label: 'Button'
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  label: 'Button'
}
