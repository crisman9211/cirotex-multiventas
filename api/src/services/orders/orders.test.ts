import type { Order } from '@prisma/client'

import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'
import type { StandardScenario } from './orders.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orders', () => {
  scenario('returns all orders', async (scenario: StandardScenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario: StandardScenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async (scenario: StandardScenario) => {
    const result = await createOrder({
      input: {
        userClientId: scenario.order.two.userClientId,
        updatedAt: '2023-01-22T08:38:37.120Z',
        status: 'NEW',
      },
    })

    expect(result.userClientId).toEqual(scenario.order.two.userClientId)
    expect(result.updatedAt).toEqual(new Date('2023-01-22T08:38:37.120Z'))
    expect(result.status).toEqual('NEW')
  })

  scenario('updates a order', async (scenario: StandardScenario) => {
    const original = (await order({ id: scenario.order.one.id })) as Order
    const result = await updateOrder({
      id: original.id,
      input: { updatedAt: '2023-01-23T08:38:37.120Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-01-23T08:38:37.120Z'))
  })

  scenario('deletes a order', async (scenario: StandardScenario) => {
    const original = (await deleteOrder({ id: scenario.order.one.id })) as Order
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
