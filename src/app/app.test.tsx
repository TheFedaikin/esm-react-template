import React from 'react'
import { expect } from 'chai'

import { render } from '@testing-library/react'

import App from './app'

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(document.body.contains(linkElement))
  })
})
