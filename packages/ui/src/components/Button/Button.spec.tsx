import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

it('renders the button with label', () => {
  render(<Button label="teste"/>)
  expect(screen.getByText('teste')).toBeTruthy()
})
