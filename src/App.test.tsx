import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const screen = render(<App />)
  const linkElement = screen.getByText(/playing/i)
  expect(linkElement).toBeInTheDocument()
})
