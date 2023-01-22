import type { Prisma, Stock } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StockCreateArgs>({
  stock: {
    one: { data: { description: 'String', slug: 'String6053580' } },
    two: { data: { description: 'String', slug: 'String1611373' } },
  },
})

export type StandardScenario = ScenarioData<Stock, 'stock'>
