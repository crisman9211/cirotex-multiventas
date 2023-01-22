import type { StockProduct } from '@prisma/client'

import {
  stockProducts,
  stockProduct,
  createStockProduct,
  updateStockProduct,
  deleteStockProduct,
} from './stockProducts'
import type { StandardScenario } from './stockProducts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stockProducts', () => {
  scenario('returns all stockProducts', async (scenario: StandardScenario) => {
    const result = await stockProducts()

    expect(result.length).toEqual(Object.keys(scenario.stockProduct).length)
  })

  scenario(
    'returns a single stockProduct',
    async (scenario: StandardScenario) => {
      const result = await stockProduct({ id: scenario.stockProduct.one.id })

      expect(result).toEqual(scenario.stockProduct.one)
    }
  )

  scenario('creates a stockProduct', async (scenario: StandardScenario) => {
    const result = await createStockProduct({
      input: {
        stockId: scenario.stockProduct.two.stockId,
        updatedAt: '2023-01-22T08:39:40.690Z',
        productId: scenario.stockProduct.two.productId,
      },
    })

    expect(result.stockId).toEqual(scenario.stockProduct.two.stockId)
    expect(result.updatedAt).toEqual(new Date('2023-01-22T08:39:40.690Z'))
    expect(result.productId).toEqual(scenario.stockProduct.two.productId)
  })

  scenario('updates a stockProduct', async (scenario: StandardScenario) => {
    const original = (await stockProduct({
      id: scenario.stockProduct.one.id,
    })) as StockProduct
    const result = await updateStockProduct({
      id: original.id,
      input: { updatedAt: '2023-01-23T08:39:40.690Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-23T08:39:40.690Z'))
  })

  scenario('deletes a stockProduct', async (scenario: StandardScenario) => {
    const original = (await deleteStockProduct({
      id: scenario.stockProduct.one.id,
    })) as StockProduct
    const result = await stockProduct({ id: original.id })

    expect(result).toEqual(null)
  })
})
