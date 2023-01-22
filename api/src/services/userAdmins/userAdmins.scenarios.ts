import type { Prisma, UserAdmin } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserAdminCreateArgs>({
  userAdmin: {
    one: {
      data: {
        role: 'ADMIN',
        user: {
          create: {
            uid: 'String7198192',
            email: 'String8585811',
            name: 'String',
          },
        },
      },
    },
    two: {
      data: {
        role: 'ADMIN',
        user: {
          create: {
            uid: 'String2428214',
            email: 'String4453841',
            name: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserAdmin, 'userAdmin'>
