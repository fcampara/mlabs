import { ComponentType } from 'react'
import { CardLinkedindProps } from './Linkedin/types'

/* eslint-disable no-unused-vars */
type Socials = 'Instagram' | 'Linkedin'

export interface CardSocialProps
  extends CardLinkedindProps {
  social: Socials
}

export type CardSocialFileProps = {
  [k in Socials]: Promise<{ default: ComponentType<any> }>
}
