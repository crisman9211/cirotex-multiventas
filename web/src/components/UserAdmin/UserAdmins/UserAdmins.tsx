import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserAdmin/UserAdminsCell'
import { formatEnum, truncate } from 'src/lib/formatters'

import type { DeleteUserAdminMutationVariables, FindUserAdmins } from 'types/graphql'

const DELETE_USER_ADMIN_MUTATION = gql`
  mutation DeleteUserAdminMutation($id: String!) {
    deleteUserAdmin(id: $id) {
      id
    }
  }
`

const UserAdminsList = ({ userAdmins }: FindUserAdmins) => {
  const [deleteUserAdmin] = useMutation(DELETE_USER_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('UserAdmin deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUserAdminMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userAdmin ' + id + '?')) {
      deleteUserAdmin({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userAdmins.map((userAdmin) => (
            <tr key={userAdmin.id}>
              <td>{truncate(userAdmin.id)}</td>
              <td>{truncate(userAdmin.userId)}</td>
              <td>{formatEnum(userAdmin.role)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userAdmin({ id: userAdmin.id })}
                    title={'Show userAdmin ' + userAdmin.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserAdmin({ id: userAdmin.id })}
                    title={'Edit userAdmin ' + userAdmin.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userAdmin ' + userAdmin.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userAdmin.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserAdminsList
