import type { Stock } from '@prisma/client'

import { stocks, stock, createStock, updateStock, deleteStock } from './stocks'
import type { StandardScenario } from './stocks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stocks', () => {
  scenario('returns all stocks', async (scenario: StandardScenario) => {
    const result = await stocks()

    expect(result.length).toEqual(Object.keys(scenario.stock).length)
  })

  scenario('returns a single stock', async (scenario: StandardScenario) => {
    const result = await stock({ id: scenario.stock.one.id })

    expect(result).toEqual(scenario.stock.one)
  })

  scenario('creates a stock', async () => {
    const result = await createStock({
      input: { description: 'String', slug: 'String5620058' },
    })

    expect(result.description).toEqual('String')
    expect(result.slug).toEqual('String5620058')
  })

  scenario('updates a stock', async (scenario: StandardScenario) => {
    const original = (await stock({ id: scenario.stock.one.id })) as Stock
    const result = await updateStock({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a stock', async (scenario: StandardScenario) => {
    const original = (await deleteStock({ id: scenario.stock.one.id })) as Stock
    const result = await stock({ id: original.id })

    expect(result).toEqual(null)
  })
})
