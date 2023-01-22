// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DesktopMenu> = (args) => {
//   return <DesktopMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DesktopMenu from './DesktopMenu'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Users', path: '/' },
  { name: 'Posts', path: '/' },
  { name: 'Comments', path: '/' },
]

export const generated = () => {
  return <DesktopMenu title={'BackOffice'} navItems={navItems} color="#000" />
}

export default {
  title: 'Components/DesktopMenu',
  component: DesktopMenu,
} as ComponentMeta<typeof DesktopMenu>
