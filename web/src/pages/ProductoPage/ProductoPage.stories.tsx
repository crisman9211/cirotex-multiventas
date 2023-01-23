import type { ComponentMeta } from '@storybook/react'

import ProductoPage from './ProductoPage'

export const generated = () => {
  return <ProductoPage />
}

export default {
  title: 'Pages/ProductoPage',
  component: ProductoPage,
} as ComponentMeta<typeof ProductoPage>
