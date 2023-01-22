import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ShoppingCart/ShoppingCartsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteShoppingCartMutationVariables, FindShoppingCarts } from 'types/graphql'

const DELETE_SHOPPING_CART_MUTATION = gql`
  mutation DeleteShoppingCartMutation($id: String!) {
    deleteShoppingCart(id: $id) {
      id
    }
  }
`

const ShoppingCartsList = ({ shoppingCarts }: FindShoppingCarts) => {
  const [deleteShoppingCart] = useMutation(DELETE_SHOPPING_CART_MUTATION, {
    onCompleted: () => {
      toast.success('ShoppingCart deleted')
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

  const onDeleteClick = (id: DeleteShoppingCartMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete shoppingCart ' + id + '?')) {
      deleteShoppingCart({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User client id</th>
            <th>Is available</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCarts.map((shoppingCart) => (
            <tr key={shoppingCart.id}>
              <td>{truncate(shoppingCart.id)}</td>
              <td>{truncate(shoppingCart.userClientId)}</td>
              <td>{checkboxInputTag(shoppingCart.isAvailable)}</td>
              <td>{timeTag(shoppingCart.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.shoppingCart({ id: shoppingCart.id })}
                    title={'Show shoppingCart ' + shoppingCart.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editShoppingCart({ id: shoppingCart.id })}
                    title={'Edit shoppingCart ' + shoppingCart.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete shoppingCart ' + shoppingCart.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(shoppingCart.id)}
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

export default ShoppingCartsList
