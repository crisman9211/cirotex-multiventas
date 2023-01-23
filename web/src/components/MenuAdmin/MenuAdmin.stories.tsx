// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MenuAdmin> = (args) => {
//   return <MenuAdmin {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { routes } from '@redwoodjs/router'

import MenuAdmin from './MenuAdmin'

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
  return <MenuAdmin menuRoutes={menuRoutes} />
}

export default {
  title: 'Components/MenuAdmin',
  component: MenuAdmin,
} as ComponentMeta<typeof MenuAdmin>
