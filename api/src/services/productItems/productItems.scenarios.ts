import type { Prisma, ProductItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductItemCreateArgs>({
  productItem: {
    one: {
      data: {
        updatedAt: '2023-01-22T08:50:57.137Z',
        Product: {
          create: {
            name: 'String',
            description: 'String',
            imgURL: 'String',
            price: 6703511.403520164,
            isAvailable: true,
            updatedAt: '2023-01-22T08:50:57.137Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-01-22T08:50:57.137Z',
        Product: {
          create: {
            name: 'String',
            description: 'String',
            imgURL: 'String',
            price: 3641531.850342388,
            isAvailable: true,
            updatedAt: '2023-01-22T08:50:57.137Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ProductItem, 'productItem'>
