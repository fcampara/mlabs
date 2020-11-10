import React from 'react'
import TimeSVG from '../assets/icons/time.svg'
import { Container, Icon } from './styles'
import { formatTime } from './utils'
import { TimeInputProps } from './types'

const ComponentTimeInput: React.FC<TimeInputProps> = ({
  value,
  onChange
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formattedTime = formatTime(event.target.value)
    event.target.value = formattedTime
    onChange(event)
  }

  return (
    <Container>
      <Icon alt="Icone de relógio" src={TimeSVG} />
      <input
        placeholder="HH:MM"
        value={value}
        onChange={handleChange}
      />
    </Container>
  )
}

export default React.memo(ComponentTimeInput)
