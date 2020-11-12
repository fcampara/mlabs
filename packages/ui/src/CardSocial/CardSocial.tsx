import React, { lazy, Suspense, useMemo } from 'react'
import {
  CardSocialFileProps,
  CardSocialProps
} from './types'
import { Container } from './styles'

const FILES: CardSocialFileProps = {
  Instagram: import('./Instagram'),
  Linkedin: import('./Linkedin')
}

const ComponentCardSocial: React.FC<CardSocialProps> = ({
  social,
  ...props
}) => {
  const Card = useMemo(() => lazy(() => FILES[social]), [
    social
  ])

  if (!social || !Card) {
    return <div> - Rede social não cadastrada - </div>
  }

  return (
    <Suspense fallback="">
      <Container>{Card && <Card {...props} />}</Container>
    </Suspense>
  )
}

export default ComponentCardSocial
