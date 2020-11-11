import React from 'react'
import { Container, Icon } from './styles'
import Navigation from './Navigation'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DateSVG from '../assets/icons/date.svg'
import {
  MONTHS,
  WEEKDAYS_LONG,
  WEEKDAYS_SHORT,
  formatDatePTBR
} from './utils'
import { DateInputProps } from './types'

export const ComponentDateInput: React.FC<DateInputProps> = ({
  onChange,
  value
}) => {
  return (
    <Container>
      <Icon alt="Icone calendario" src={DateSVG} />
      <DayPickerInput
        placeholder="DD/MM/YYYY"
        value={value}
        formatDate={date => formatDatePTBR(date)}
        format="LL"
        onDayChange={day => onChange(day)}
        dayPickerProps={{
          navbarElement: Navigation,
          showOutsideDays: true,
          locale: 'pt-BR',
          selectedDays: value,
          months: MONTHS,
          weekdaysLong: WEEKDAYS_LONG,
          weekdaysShort: WEEKDAYS_SHORT
        }}
      />
    </Container>
  )
}

export default React.memo(ComponentDateInput)
