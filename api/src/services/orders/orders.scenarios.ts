import type { Prisma, Order } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: {
    one: {
      data: {
        updatedAt: '2023-01-22T08:38:37.135Z',
        status: 'NEW',
        UserClient: {
          create: {
            user: {
              create: {
                uid: 'String730878',
                email: 'String1192940',
                name: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-01-22T08:38:37.135Z',
        status: 'NEW',
        UserClient: {
          create: {
            user: {
              create: {
                uid: 'String1671563',
                email: 'String731619',
                name: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Order, 'order'>
