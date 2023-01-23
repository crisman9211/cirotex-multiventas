import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ClientLayout from './ClientLayout'

export const generated: ComponentStory<typeof ClientLayout> = (args) => {
  return <ClientLayout {...args} />
}

export default {
  title: 'Layouts/ClientLayout',
  component: ClientLayout,
} as ComponentMeta<typeof ClientLayout>
