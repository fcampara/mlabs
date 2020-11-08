import React from 'react'
import Divider from '../Divider'
import { CardProps } from './types'
import { Card, Title, Container } from './styles'

export const ComponentCard: React.FC<CardProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <Card {...props}>
      <Title>{title}</Title>
      <Divider />
      <Container>{children}</Container>
    </Card>
  )
}

export default React.memo(ComponentCard)
