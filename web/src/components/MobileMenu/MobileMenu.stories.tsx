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

import MobileMenu from './MobileMenu'

const navItems = [
  { name: 'Home', path: '' },
  { name: 'Users', path: '' },
  { name: 'Posts', path: '' },
  { name: 'Comments', path: '' },
]

export const generated = () => {
  return <MobileMenu title={'BacOffice'} navItems={navItems} />
}

export default {
  title: 'Components/MobileMenu',
  component: MobileMenu,
} as ComponentMeta<typeof MobileMenu>
