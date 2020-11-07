import React, { useCallback, useState } from 'react'
import { Container } from './styles'
import Navigation from './Navigation'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import DateSVG from '../icons/date.svg'
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
  const [selectedDate, setSelectedDate] = useState<
    Date | undefined
  >(value)

  const handleDayClick = useCallback((day: Date) => {
    setSelectedDate(day)
    onChange(day)
  }, [])

  return (
    <Container>
      <img alt="Icone calendário" src={DateSVG} />
      <DayPickerInput
        placeholder="DD/MM"
        value={selectedDate}
        formatDate={formatDatePTBR}
        format="LL"
        onDayChange={handleDayClick}
        dayPickerProps={{
          navbarElement: Navigation,
          showOutsideDays: true,
          locale: 'pt-BR',
          selectedDays: selectedDate,
          months: MONTHS,
          weekdaysLong: WEEKDAYS_LONG,
          weekdaysShort: WEEKDAYS_SHORT
        }}
      />
    </Container>
  )
}

export default ComponentDateInput
