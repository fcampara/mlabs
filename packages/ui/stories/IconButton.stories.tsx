import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import IconButton, {
  IconButtonProps
} from '../src/IconButton'

export default {
  title: 'Buttons/Icon',
  component: IconButton,
  argTypes: { onClick: { action: 'onClick' } }
} as Meta

const Template: Story<IconButtonProps> = args => (
  <IconButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Selected = Template.bind({})
Selected.args = {
  selected: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}
