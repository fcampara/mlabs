import styled, { css } from 'styled-components'
import 'react-day-picker/lib/style.css'
import { Colors } from '../styles/token'

const DayPickerStyle = css`
  & {
    .DayPickerInput {
      width: 100%;

      & > input {
        width: 100%;
        border: none;
        outline: none;
      }
    }

    .DayPicker {
      font-family: Poppins;
    }

    .DayPicker-Day {
      border-radius: 0;
    }

    .DayPicker-Day,
    .DayPicker-Weekday {
      font-size: 16px;
      color: #172b4d;
      width: 41px;
      height: 32px;
      text-transform: uppercase;
    }

    .DayPicker-Day.DayPicker-Day--selected {
      border: 3px solid #4c9aff;
      color: #000;
      border-left-width: 6px;
    }

    .DayPicker-Caption {
      display: none;
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: transparent;
      color: #0052cc;

      &:hover {
        background-color: ${Colors['primary-light']};
      }
    }

    .DayPicker-Day--outside {
      color: #6b778c;
    }

    .DayPicker-Weekday {
      padding-bottom: 0;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #949494;
  padding: 0 12px;
  height: 42px;
  border-radius: 2px;

  & > input {
    width: 100%;
    border: none;
  }

  ${DayPickerStyle}
`
export const Icon = styled.img`
  margin-right: 10px;
`
