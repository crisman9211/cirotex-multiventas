import type { Prisma, UserClient } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserClientCreateArgs>({
  userClient: {
    one: {
      data: {
        user: {
          create: {
            uid: 'String6482286',
            email: 'String7355003',
            name: 'String',
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            uid: 'String2334804',
            email: 'String6452941',
            name: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserClient, 'userClient'>
