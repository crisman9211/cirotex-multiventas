import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserClient/UserClientsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteUserClientMutationVariables, FindUserClients } from 'types/graphql'

const DELETE_USER_CLIENT_MUTATION = gql`
  mutation DeleteUserClientMutation($id: String!) {
    deleteUserClient(id: $id) {
      id
    }
  }
`

const UserClientsList = ({ userClients }: FindUserClients) => {
  const [deleteUserClient] = useMutation(DELETE_USER_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('UserClient deleted')
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

  const onDeleteClick = (id: DeleteUserClientMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userClient ' + id + '?')) {
      deleteUserClient({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Phone number</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userClients.map((userClient) => (
            <tr key={userClient.id}>
              <td>{truncate(userClient.id)}</td>
              <td>{truncate(userClient.phoneNumber)}</td>
              <td>{truncate(userClient.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userClient({ id: userClient.id })}
                    title={'Show userClient ' + userClient.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserClient({ id: userClient.id })}
                    title={'Edit userClient ' + userClient.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userClient ' + userClient.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userClient.id)}
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

export default UserClientsList
