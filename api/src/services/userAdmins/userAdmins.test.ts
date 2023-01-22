import type { UserAdmin } from '@prisma/client'

import {
  userAdmins,
  userAdmin,
  createUserAdmin,
  updateUserAdmin,
  deleteUserAdmin,
} from './userAdmins'
import type { StandardScenario } from './userAdmins.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userAdmins', () => {
  scenario('returns all userAdmins', async (scenario: StandardScenario) => {
    const result = await userAdmins()

    expect(result.length).toEqual(Object.keys(scenario.userAdmin).length)
  })

  scenario('returns a single userAdmin', async (scenario: StandardScenario) => {
    const result = await userAdmin({ id: scenario.userAdmin.one.id })

    expect(result).toEqual(scenario.userAdmin.one)
  })

  scenario('creates a userAdmin', async (scenario: StandardScenario) => {
    const result = await createUserAdmin({
      input: { userId: scenario.userAdmin.two.userId, role: 'ADMIN' },
    })

    expect(result.userId).toEqual(scenario.userAdmin.two.userId)
    expect(result.role).toEqual('ADMIN')
  })

  scenario('updates a userAdmin', async (scenario: StandardScenario) => {
    const original = (await userAdmin({
      id: scenario.userAdmin.one.id,
    })) as UserAdmin
    const result = await updateUserAdmin({
      id: original.id,
      input: { role: 'ADMIN' },
    })

    expect(result.role).toEqual('ADMIN')
  })

  scenario('deletes a userAdmin', async (scenario: StandardScenario) => {
    const original = (await deleteUserAdmin({
      id: scenario.userAdmin.one.id,
    })) as UserAdmin
    const result = await userAdmin({ id: original.id })

    expect(result).toEqual(null)
  })
})
