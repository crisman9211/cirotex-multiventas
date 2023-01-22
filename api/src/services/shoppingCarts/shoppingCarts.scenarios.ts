import type { Prisma, ShoppingCart } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ShoppingCartCreateArgs>({
  shoppingCart: {
    one: {
      data: {
        isAvailable: true,
        userClient: {
          create: {
            user: {
              create: {
                uid: 'String3334381',
                email: 'String5165166',
                name: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        isAvailable: true,
        userClient: {
          create: {
            user: {
              create: {
                uid: 'String4934350',
                email: 'String3836265',
                name: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ShoppingCart, 'shoppingCart'>
