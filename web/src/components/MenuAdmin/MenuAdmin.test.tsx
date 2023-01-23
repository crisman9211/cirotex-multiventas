import { render } from '@redwoodjs/testing/web'

import MenuAdmin from './MenuAdmin'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MenuAdmin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuAdmin />)
    }).not.toThrow()
  })
})
