import React from 'react'
import { NavitagionProps } from './types'
import Button from '../../Button'
import { Container, InfoMonthYear } from './styles'
import { MONTHS } from '../utils'
import LeftArrowSVG from '../../icons/leftArrow.svg'
import RightArrowSVG from '../../icons/rightArrow.svg'

const ComponetDateInputNavigation: React.FC<NavitagionProps> = ({
  month: date,
  onPreviousClick,
  onNextClick
}) => {
  const month = MONTHS[date.getMonth()]
  const year = date.getFullYear()

  return (
    <Container>
      <Button variant="contained" onClick={() => onPreviousClick()}>
        <img alt="Navegador para esquerda" src={LeftArrowSVG} />
      </Button>
      <InfoMonthYear>
        {month} {year}
      </InfoMonthYear>
      <Button variant="contained" onClick={() => onNextClick()}>
        <img alt="Navegador para direita" src={RightArrowSVG} />
      </Button>
    </Container>
  )
}

export default ComponetDateInputNavigation
