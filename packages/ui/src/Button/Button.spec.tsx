import React from 'react'
import faker from 'faker'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('Button', () => {
  test('rendes buttons with labels', () => {
    const label = faker.random.word()
    const { getByText } = render(<Button label={label} />)
    expect(getByText(label)).toBeInTheDocument()
  })
  describe('When pass variant contained', () => {
    it('must have class "button--contained"', () => {
      const label = faker.random.word()
      const { container } = render(
        <Button label={label} variant="contained" />
      )
      expect(container.firstChild).toHaveClass(
        'button--contained'
      )
    })
  })
  describe('When pass variant outline', () => {
    it('must have class "button--outline"', () => {
      const label = faker.random.word()
      const { container } = render(
        <Button label={label} variant="outline" />
      )
      expect(container.firstChild).toHaveClass(
        'button--outline'
      )
    })
  })
  describe('When pass variant secondary', () => {
    it('must have class "button--secondary"', () => {
      const label = faker.random.word()
      const { container } = render(
        <Button label={label} variant="secondary" />
      )
      expect(container.firstChild).toHaveClass(
        'button--secondary'
      )
    })
  })
})
