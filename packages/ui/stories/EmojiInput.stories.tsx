import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import EmojiInput, {
  EmojiInputProps
} from '../src/EmojiInput'

export default {
  title: 'Inputs/Emoji',
  component: EmojiInput,
  argTypes: { onChange: { action: 'onChange' } }
} as Meta

const Template: Story<EmojiInputProps> = args => (
  <EmojiInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Exemplo de placeholder'
}
