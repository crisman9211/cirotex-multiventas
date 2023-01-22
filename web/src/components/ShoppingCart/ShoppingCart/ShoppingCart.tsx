
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag,  } from 'src/lib/formatters'

import type { DeleteShoppingCartMutationVariables, FindShoppingCartById } from 'types/graphql'

const DELETE_SHOPPING_CART_MUTATION = gql`
  mutation DeleteShoppingCartMutation($id: String!) {
    deleteShoppingCart(id: $id) {
      id
    }
  }
`

interface Props {
  shoppingCart: NonNullable<FindShoppingCartById['shoppingCart']>
}

const ShoppingCart = ({ shoppingCart }: Props) => {
  const [deleteShoppingCart] = useMutation(DELETE_SHOPPING_CART_MUTATION, {
    onCompleted: () => {
      toast.success('ShoppingCart deleted')
      navigate(routes.shoppingCarts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteShoppingCartMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete shoppingCart ' + id + '?')) {
      deleteShoppingCart({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ShoppingCart {shoppingCart.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{shoppingCart.id}</td>
            </tr><tr>
              <th>User client id</th>
              <td>{shoppingCart.userClientId}</td>
            </tr><tr>
              <th>Is available</th>
              <td>{checkboxInputTag(shoppingCart.isAvailable)}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(shoppingCart.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShoppingCart({ id: shoppingCart.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(shoppingCart.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ShoppingCart
