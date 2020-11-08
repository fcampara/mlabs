import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FileInput from '../src/FileInput'

export default {
  title: 'Inputs/File',
  component: FileInput
} as Meta

const Template: Story = args => <FileInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onChange: date => console.log(date)
}
