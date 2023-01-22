import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserAdminForm from 'src/components/UserAdmin/UserAdminForm'

import type { CreateUserAdminInput } from 'types/graphql'

const CREATE_USER_ADMIN_MUTATION = gql`
  mutation CreateUserAdminMutation($input: CreateUserAdminInput!) {
    createUserAdmin(input: $input) {
      id
    }
  }
`

const NewUserAdmin = () => {
  const [createUserAdmin, { loading, error }] = useMutation(
    CREATE_USER_ADMIN_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserAdmin created')
        navigate(routes.userAdmins())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUserAdminInput) => {
    createUserAdmin({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserAdmin</h2>
      </header>
      <div className="rw-segment-main">
        <UserAdminForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserAdmin
