import type { shoppingCart } from '@prisma/client'

import {
  shoppingCarts,
  shoppingCart,
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
} from './shoppingCarts'
import type { StandardScenario } from './shoppingCarts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shoppingCarts', () => {
  scenario('returns all shoppingCarts', async (scenario: StandardScenario) => {
    const result = await shoppingCarts()

    expect(result.length).toEqual(Object.keys(scenario.shoppingCart).length)
  })

  scenario(
    'returns a single shoppingCart',
    async (scenario: StandardScenario) => {
      const result = await shoppingCart({ id: scenario.shoppingCart.one.id })

      expect(result).toEqual(scenario.shoppingCart.one)
    }
  )

  scenario('creates a shoppingCart', async (scenario: StandardScenario) => {
    const result = await createShoppingCart({
      input: {
        userClientId: scenario.shoppingCart.two.userClientId,
        isAvailable: true,
      },
    })

    expect(result.userClientId).toEqual(scenario.shoppingCart.two.userClientId)
    expect(result.isAvailable).toEqual(true)
  })

  scenario('updates a shoppingCart', async (scenario: StandardScenario) => {
    const original = (await shoppingCart({
      id: scenario.shoppingCart.one.id,
    })) as shoppingCart
    const result = await updateShoppingCart({
      id: original.id,
      input: { isAvailable: false },
    })

    expect(result.isAvailable).toEqual(false)
  })

  scenario('deletes a shoppingCart', async (scenario: StandardScenario) => {
    const original = (await deleteShoppingCart({
      id: scenario.shoppingCart.one.id,
    })) as shoppingCart
    const result = await shoppingCart({ id: original.id })

    expect(result).toEqual(null)
  })
})
