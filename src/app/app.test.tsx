import React from 'react'
import { expect } from 'chai'

import App from '@app'
import { render } from '@testing-library/react'

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(document.body.contains(linkElement))
  })
})
