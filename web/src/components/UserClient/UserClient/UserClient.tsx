
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteUserClientMutationVariables, FindUserClientById } from 'types/graphql'

const DELETE_USER_CLIENT_MUTATION = gql`
  mutation DeleteUserClientMutation($id: String!) {
    deleteUserClient(id: $id) {
      id
    }
  }
`

interface Props {
  userClient: NonNullable<FindUserClientById['userClient']>
}

const UserClient = ({ userClient }: Props) => {
  const [deleteUserClient] = useMutation(DELETE_USER_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('UserClient deleted')
      navigate(routes.userClients())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserClientMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userClient ' + id + '?')) {
      deleteUserClient({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserClient {userClient.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userClient.id}</td>
            </tr><tr>
              <th>Phone number</th>
              <td>{userClient.phoneNumber}</td>
            </tr><tr>
              <th>User id</th>
              <td>{userClient.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserClient({ id: userClient.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userClient.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserClient
