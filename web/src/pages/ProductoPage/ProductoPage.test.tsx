import { render } from '@redwoodjs/testing/web'

import ProductoPage from './ProductoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProductoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductoPage />)
    }).not.toThrow()
  })
})
