import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { RecoilRoot } from 'recoil'

test('renders learn react link', () => {
  const screen = render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )
  const linkElement = screen.getByText(/toggle/i)
  expect(linkElement).toBeInTheDocument()
})
