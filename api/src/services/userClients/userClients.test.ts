import type { UserClient } from '@prisma/client'

import {
  userClients,
  userClient,
  createUserClient,
  updateUserClient,
  deleteUserClient,
} from './userClients'
import type { StandardScenario } from './userClients.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userClients', () => {
  scenario('returns all userClients', async (scenario: StandardScenario) => {
    const result = await userClients()

    expect(result.length).toEqual(Object.keys(scenario.userClient).length)
  })

  scenario(
    'returns a single userClient',
    async (scenario: StandardScenario) => {
      const result = await userClient({ id: scenario.userClient.one.id })

      expect(result).toEqual(scenario.userClient.one)
    }
  )

  scenario('creates a userClient', async (scenario: StandardScenario) => {
    const result = await createUserClient({
      input: { userId: scenario.userClient.two.userId },
    })

    expect(result.userId).toEqual(scenario.userClient.two.userId)
  })

  scenario('updates a userClient', async (scenario: StandardScenario) => {
    const original = (await userClient({
      id: scenario.userClient.one.id,
    })) as UserClient
    const result = await updateUserClient({
      id: original.id,
      input: { userId: scenario.userClient.two.userId },
    })

    expect(result.userId).toEqual(scenario.userClient.two.userId)
  })

  scenario('deletes a userClient', async (scenario: StandardScenario) => {
    const original = (await deleteUserClient({
      id: scenario.userClient.one.id,
    })) as UserClient
    const result = await userClient({ id: original.id })

    expect(result).toEqual(null)
  })
})
