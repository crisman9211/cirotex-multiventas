import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        imgURL: 'String',
        price: 5244379.04135878,
        isAvailable: true,
        updatedAt: '2023-01-22T08:36:51.783Z',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        imgURL: 'String',
        price: 1589102.280392709,
        isAvailable: true,
        updatedAt: '2023-01-22T08:36:51.783Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
