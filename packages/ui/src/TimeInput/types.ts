import {
  ChangeEventHandler,
  InputHTMLAttributes
} from 'react'

export interface TimeInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
