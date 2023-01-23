import { render } from '@redwoodjs/testing/web'

import AppBarClient from './AppBarClient'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppBarClient', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppBarClient />)
    }).not.toThrow()
  })
})
