import type { EditUserClientById, UpdateUserClientInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserClientForm from 'src/components/UserClient/UserClientForm'

export const QUERY = gql`
  query EditUserClientById($id: String!) {
    userClient: userClient(id: $id) {
      id
      phoneNumber
      userId
    }
  }
`
const UPDATE_USER_CLIENT_MUTATION = gql`
  mutation UpdateUserClientMutation($id: String!, $input: UpdateUserClientInput!) {
    updateUserClient(id: $id, input: $input) {
      id
      phoneNumber
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userClient }: CellSuccessProps<EditUserClientById>) => {
  const [updateUserClient, { loading, error }] = useMutation(
    UPDATE_USER_CLIENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserClient updated')
        navigate(routes.userClients())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserClientInput,
    id: EditUserClientById['userClient']['id']
  ) => {
    updateUserClient({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UserClient {userClient?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserClientForm userClient={userClient} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
