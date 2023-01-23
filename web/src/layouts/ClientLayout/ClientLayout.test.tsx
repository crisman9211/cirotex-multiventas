import { render } from '@redwoodjs/testing/web'

import ClientLayout from './ClientLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ClientLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClientLayout />)
    }).not.toThrow()
  })
})
