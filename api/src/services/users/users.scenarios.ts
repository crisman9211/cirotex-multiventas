import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { uid: 'String6041113', email: 'String1384441', name: 'String' },
    },
    two: {
      data: { uid: 'String398900', email: 'String5907046', name: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
