import { render } from '@redwoodjs/testing/web'

import MobileMenu from './MobileMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileMenu />)
    }).not.toThrow()
  })
})
