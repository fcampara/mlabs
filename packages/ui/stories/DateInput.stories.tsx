import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import DateInput, { DateInputProps } from '../src/DateInput'

export default {
  title: 'Inputs/Date',
  component: DateInput
} as Meta

const Template: Story<DateInputProps> = args => (
  <DateInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  onChange: date => console.log(date)
}
