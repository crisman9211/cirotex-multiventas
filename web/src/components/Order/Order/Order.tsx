
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag,  } from 'src/lib/formatters'

import type { DeleteOrderMutationVariables, FindOrderById } from 'types/graphql'

const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrderMutation($id: String!) {
    deleteOrder(id: $id) {
      id
    }
  }
`

interface Props {
  order: NonNullable<FindOrderById['order']>
}

const Order = ({ order }: Props) => {
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('Order deleted')
      navigate(routes.orders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteOrderMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete order ' + id + '?')) {
      deleteOrder({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Order {order.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{order.id}</td>
            </tr><tr>
              <th>User client id</th>
              <td>{order.userClientId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(order.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(order.updatedAt)}</td>
            </tr><tr>
              <th>Total price</th>
              <td>{order.totalPrice}</td>
            </tr><tr>
              <th>Status</th>
              <td>{formatEnum(order.status)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrder({ id: order.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(order.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Order
