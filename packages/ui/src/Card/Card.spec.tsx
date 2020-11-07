import React from 'react'
import faker from 'faker'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './Card'

describe('Card', () => {
  test('rendes card with title and children', () => {
    const title = faker.random.word()
    const children = faker.lorem.paragraph()
    const { getByText } = render(
      <Card title={title}>{children}</Card>
    )
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(children)).toBeInTheDocument()
  })
})
