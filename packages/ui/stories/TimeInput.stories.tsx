import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TimeInput, { TimeInputProps } from '../src/TimeInput'

export default {
  title: 'Inputs/Time',
  component: TimeInput,
  argTypes: { onChange: { action: 'onChange' } }
} as Meta

const Template: Story<TimeInputProps> = args => (
  <TimeInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
