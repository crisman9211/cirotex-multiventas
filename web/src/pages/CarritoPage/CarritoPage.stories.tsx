import type { ComponentMeta } from '@storybook/react'

import CarritoPage from './CarritoPage'

export const generated = () => {
  return <CarritoPage />
}

export default {
  title: 'Pages/CarritoPage',
  component: CarritoPage,
} as ComponentMeta<typeof CarritoPage>
