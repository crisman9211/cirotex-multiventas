import type { Prisma, shoppingCart } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.shoppingCartCreateArgs>({
  shoppingCart: {
    one: {
      data: {
        isAvailable: true,
        userClient: {
          create: {
            user: {
              create: {
                uid: 'String519975',
                email: 'String4921461',
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
                uid: 'String9192566',
                email: 'String8278059',
                name: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<shoppingCart, 'shoppingCart'>
