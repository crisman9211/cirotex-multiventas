// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AppBarClient> = (args) => {
//   return <AppBarClient {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AppBarClient from './AppBarClient'

export const generated = () => {
  return <AppBarClient />
}

export default {
  title: 'Components/AppBarClient',
  component: AppBarClient,
} as ComponentMeta<typeof AppBarClient>
