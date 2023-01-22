import type { ProductItem } from '@prisma/client'

import {
  productItems,
  productItem,
  createProductItem,
  updateProductItem,
  deleteProductItem,
} from './productItems'
import type { StandardScenario } from './productItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('productItems', () => {
  scenario('returns all productItems', async (scenario: StandardScenario) => {
    const result = await productItems()

    expect(result.length).toEqual(Object.keys(scenario.productItem).length)
  })

  scenario(
    'returns a single productItem',
    async (scenario: StandardScenario) => {
      const result = await productItem({ id: scenario.productItem.one.id })

      expect(result).toEqual(scenario.productItem.one)
    }
  )

  scenario('creates a productItem', async (scenario: StandardScenario) => {
    const result = await createProductItem({
      input: {
        productId: scenario.productItem.two.productId,
        updatedAt: '2023-01-22T08:50:57.121Z',
      },
    })

    expect(result.productId).toEqual(scenario.productItem.two.productId)
    expect(result.updatedAt).toEqual(new Date('2023-01-22T08:50:57.121Z'))
  })

  scenario('updates a productItem', async (scenario: StandardScenario) => {
    const original = (await productItem({
      id: scenario.productItem.one.id,
    })) as ProductItem
    const result = await updateProductItem({
      id: original.id,
      input: { updatedAt: '2023-01-23T08:50:57.121Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-23T08:50:57.121Z'))
  })

  scenario('deletes a productItem', async (scenario: StandardScenario) => {
    const original = (await deleteProductItem({
      id: scenario.productItem.one.id,
    })) as ProductItem
    const result = await productItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
