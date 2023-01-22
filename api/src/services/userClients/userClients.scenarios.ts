import type { Prisma, UserClient } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserClientCreateArgs>({
  userClient: {
    one: {
      data: {
        user: {
          create: {
            uid: 'String1036983',
            email: 'String89396',
            name: 'String',
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            uid: 'String7684169',
            email: 'String7362663',
            name: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserClient, 'userClient'>
