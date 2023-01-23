// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProductCard> = (args) => {
//   return <ProductCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProductCard from './ProductCard'

const description = 'POLO JERSEY UNICOLOR REGULAR FIT PARA HOMBRE 22330'
const price = 40000
const name = 'Camisa T Hombre'
const imgURL =
  'https://arturocalle.vtexassets.com/arquivos/ids/518386-1200-auto?v=638076748218770000&width=1200&height=auto&aspect=true'

export const generated = () => {
  return (
    <ProductCard
      name={name}
      price={price}
      description={description}
      imgURL={imgURL}
      stock={0}
    />
  )
}

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>
