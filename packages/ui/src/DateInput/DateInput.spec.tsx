import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateInput from './DateInput'

const setup = () => {
  const mockOnChange = jest.fn()
  const utils = render(
    <DateInput value={undefined} onChange={mockOnChange} />
  )

  return {
    ...utils,
    mockOnChange
  }
}

describe('DateInput', () => {
  describe('When select date in calendar', () => {
    it('Must call onChange callback', async () => {
      const {
        mockOnChange,
        getByPlaceholderText,
        getByText
      } = setup()

      const input = getByPlaceholderText('DD/MM')
      await fireEvent.click(input)
      const dayInDatePicker = getByText('15')
      await fireEvent.click(dayInDatePicker)

      expect(mockOnChange.mock.calls.length).toBe(1)
    })
    it('When emitted value in onChange is a Date instance', async () => {
      const {
        mockOnChange,
        getByPlaceholderText,
        getByText
      } = setup()

      const input = getByPlaceholderText('DD/MM')
      await fireEvent.click(input)
      const dayInDatePicker = getByText('15')
      await fireEvent.click(dayInDatePicker)

      expect(
        mockOnChange.mock.calls[0][0] instanceof Date
      ).toBeTruthy()
    })
  })
})
