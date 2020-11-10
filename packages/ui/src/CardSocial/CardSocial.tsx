import React, {
  lazy,
  useEffect,
  useState,
  Suspense
} from 'react'
import {
  CardSocialFileProps,
  CardSocialProps
} from './types'
import { Container } from './styles'

const FILES: CardSocialFileProps = {
  instagram: import('./Instagram'),
  linkedin: import('./Linkedin')
}

const ComponentCardSocial: React.FC<CardSocialProps> = ({
  social,
  ...props
}) => {
  const [Card, setCard] = useState<React.FC>()

  console.log(props)
  useEffect(() => {
    const card = lazy(() => FILES[social])

    setCard(card)
  }, [])
  return (
    <Suspense fallback="">
      <Container>{Card && <Card {...props} />}</Container>
    </Suspense>
  )
}

export default ComponentCardSocial
