import { render } from '@redwoodjs/testing/web'

import CarritoPage from './CarritoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CarritoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CarritoPage />)
    }).not.toThrow()
  })
})
