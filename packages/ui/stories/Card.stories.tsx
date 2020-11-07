import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '../src/Card'
import faker from 'faker'

export default {
  title: 'Cards/Card',
  component: Card
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Example',
  children: faker.lorem.paragraph()
}
