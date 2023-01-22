import type { EditUserAdminById, UpdateUserAdminInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserAdminForm from 'src/components/UserAdmin/UserAdminForm'

export const QUERY = gql`
  query EditUserAdminById($id: String!) {
    userAdmin: userAdmin(id: $id) {
      id
      userId
      role
    }
  }
`
const UPDATE_USER_ADMIN_MUTATION = gql`
  mutation UpdateUserAdminMutation($id: String!, $input: UpdateUserAdminInput!) {
    updateUserAdmin(id: $id, input: $input) {
      id
      userId
      role
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userAdmin }: CellSuccessProps<EditUserAdminById>) => {
  const [updateUserAdmin, { loading, error }] = useMutation(
    UPDATE_USER_ADMIN_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserAdmin updated')
        navigate(routes.userAdmins())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserAdminInput,
    id: EditUserAdminById['userAdmin']['id']
  ) => {
    updateUserAdmin({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UserAdmin {userAdmin?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserAdminForm userAdmin={userAdmin} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
