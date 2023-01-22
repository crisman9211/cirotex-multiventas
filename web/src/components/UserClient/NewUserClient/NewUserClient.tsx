import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserClientForm from 'src/components/UserClient/UserClientForm'

import type { CreateUserClientInput } from 'types/graphql'

const CREATE_USER_CLIENT_MUTATION = gql`
  mutation CreateUserClientMutation($input: CreateUserClientInput!) {
    createUserClient(input: $input) {
      id
    }
  }
`

const NewUserClient = () => {
  const [createUserClient, { loading, error }] = useMutation(
    CREATE_USER_CLIENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserClient created')
        navigate(routes.userClients())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUserClientInput) => {
    createUserClient({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserClient</h2>
      </header>
      <div className="rw-segment-main">
        <UserClientForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserClient
