import type { Prisma, ProductItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductItemCreateArgs>({
  productItem: {
    one: {
      data: {
        updatedAt: '2023-01-22T08:37:33.010Z',
        Product: {
          create: {
            name: 'String',
            description: 'String',
            imgURL: 'String',
            price: 4674380.749431148,
            isAvailable: true,
            updatedAt: '2023-01-22T08:37:33.010Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-01-22T08:37:33.010Z',
        Product: {
          create: {
            name: 'String',
            description: 'String',
            imgURL: 'String',
            price: 6148559.384469334,
            isAvailable: true,
            updatedAt: '2023-01-22T08:37:33.010Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ProductItem, 'productItem'>
