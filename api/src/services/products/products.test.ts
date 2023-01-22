import type { Product } from '@prisma/client'

import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'
import type { StandardScenario } from './products.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('products', () => {
  scenario('returns all products', async (scenario: StandardScenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario: StandardScenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async () => {
    const result = await createProduct({
      input: {
        name: 'String',
        description: 'String',
        imgURL: 'String',
        price: 2321276.0389818144,
        isAvailable: true,
        updatedAt: '2023-01-22T08:36:51.775Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.imgURL).toEqual('String')
    expect(result.price).toEqual(2321276.0389818144)
    expect(result.isAvailable).toEqual(true)
    expect(result.updatedAt).toEqual(new Date('2023-01-22T08:36:51.775Z'))
  })

  scenario('updates a product', async (scenario: StandardScenario) => {
    const original = (await product({ id: scenario.product.one.id })) as Product
    const result = await updateProduct({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a product', async (scenario: StandardScenario) => {
    const original = (await deleteProduct({
      id: scenario.product.one.id,
    })) as Product
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})
