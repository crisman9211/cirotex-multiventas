import { render } from '@redwoodjs/testing/web'

import AppBarAdmin from './AppBarAdmin'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppBarAdmin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppBarAdmin />)
    }).not.toThrow()
  })
})
