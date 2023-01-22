import { render } from '@redwoodjs/testing/web'

import DesktopMenu from './DesktopMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DesktopMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DesktopMenu />)
    }).not.toThrow()
  })
})
