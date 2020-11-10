import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import CardSocial, {
  CardSocialProps
} from '../src/CardSocial'
import { name, date, image, lorem } from 'faker'

export default {
  title: 'Cards/Social',
  component: CardSocial
} as Meta

const Template: Story<CardSocialProps> = args => (
  <CardSocial {...args} />
)

export const Instagram = Template.bind({})
Instagram.args = {
  social: 'instagram'
}

export const Linkedin = Template.bind({})
Linkedin.args = {
  userName: name.findName(),
  date: date.future(),
  post: lorem.paragraph(),
  image: image.imageUrl(),
  social: 'linkedin'
}
