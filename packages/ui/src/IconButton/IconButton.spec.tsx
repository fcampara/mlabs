import React from 'react'
import faker from 'faker'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IconButton from './IconButton'

describe('IconButton', () => {
  test('render icon buttons', () => {
    const children = String(faker.random.number())
    const { getByText } = render(
      <IconButton>{children}</IconButton>
    )
    expect(getByText(children)).toBeInTheDocument()
  })
  describe('When pass props selected', () => {
    it('Must have class "icon-button__selected"', () => {
      const children = String(faker.random.number())
      const { getByText } = render(
        <IconButton selected>{children}</IconButton>
      )
      expect(getByText(children)).toHaveClass(
        'icon-button__selected'
      )
    })
  })
})
