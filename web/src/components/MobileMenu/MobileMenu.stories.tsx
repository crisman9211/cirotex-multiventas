// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MobileMenu> = (args) => {
//   return <MobileMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { routes } from '@redwoodjs/router'

import MobileMenu from './MobileMenu'

const menuRoutes = [
  {
    name: 'StockProducts',
    model: 'StockProduct',
    route: routes.stockProducts(),
  },
  {
    name: 'Stocks',
    model: 'Stock',
    route: routes.stocks(),
  },
  {
    name: 'Orders',
    model: 'Order',
    route: routes.orders(),
  },
]

export const generated = () => {
  return <MobileMenu title={'BacOffice'} menuRoutes={menuRoutes} />
}

export default {
  title: 'Components/MobileMenu',
  component: MobileMenu,
} as ComponentMeta<typeof MobileMenu>
