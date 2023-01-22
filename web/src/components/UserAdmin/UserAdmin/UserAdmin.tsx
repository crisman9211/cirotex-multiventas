
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum,  } from 'src/lib/formatters'

import type { DeleteUserAdminMutationVariables, FindUserAdminById } from 'types/graphql'

const DELETE_USER_ADMIN_MUTATION = gql`
  mutation DeleteUserAdminMutation($id: String!) {
    deleteUserAdmin(id: $id) {
      id
    }
  }
`

interface Props {
  userAdmin: NonNullable<FindUserAdminById['userAdmin']>
}

const UserAdmin = ({ userAdmin }: Props) => {
  const [deleteUserAdmin] = useMutation(DELETE_USER_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('UserAdmin deleted')
      navigate(routes.userAdmins())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserAdminMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userAdmin ' + id + '?')) {
      deleteUserAdmin({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserAdmin {userAdmin.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userAdmin.id}</td>
            </tr><tr>
              <th>User id</th>
              <td>{userAdmin.userId}</td>
            </tr><tr>
              <th>Role</th>
              <td>{formatEnum(userAdmin.role)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserAdmin({ id: userAdmin.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userAdmin.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserAdmin
