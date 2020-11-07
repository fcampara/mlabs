import React from 'react'
import Divider from '../Divider'
import { CardProps } from './types'
import { Card, Title, Container } from './styles'

export const ComponentCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Card>
      <Title>
      {title}
      </Title>
      <Divider/>
      <Container>
        {children}
      </Container>
    </Card>
  )
}

export default ComponentCard
