import type { Prisma, StockProduct } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StockProductCreateArgs>({
  stockProduct: {
    one: {
      data: {
        updatedAt: '2023-01-22T08:39:40.703Z',
        Stock: { create: { description: 'String', slug: 'String794681' } },
        Product: {
          create: {
            name: 'String',
            description: 'String',
            imgURL: 'String',
            price: 4799573.277426326,
            isAvailable: true,
            updatedAt: '2023-01-22T08:39:40.703Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-01-22T08:39:40.703Z',
        Stock: { create: { description: 'String', slug: 'String7191655' } },
        Product: {
          create: {
            name: 'String',
            description: 'String',
            imgURL: 'String',
            price: 9003114.00291654,
            isAvailable: true,
            updatedAt: '2023-01-22T08:39:40.703Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StockProduct, 'stockProduct'>
