import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProductItem/ProductItemsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteProductItemMutationVariables, FindProductItems } from 'types/graphql'

const DELETE_PRODUCT_ITEM_MUTATION = gql`
  mutation DeleteProductItemMutation($id: String!) {
    deleteProductItem(id: $id) {
      id
    }
  }
`

const ProductItemsList = ({ productItems }: FindProductItems) => {
  const [deleteProductItem] = useMutation(DELETE_PRODUCT_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('ProductItem deleted')
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

  const onDeleteClick = (id: DeleteProductItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete productItem ' + id + '?')) {
      deleteProductItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product id</th>
            <th>Quantity</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Shopping cart id</th>
            <th>Order id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {productItems.map((productItem) => (
            <tr key={productItem.id}>
              <td>{truncate(productItem.id)}</td>
              <td>{truncate(productItem.productId)}</td>
              <td>{truncate(productItem.quantity)}</td>
              <td>{timeTag(productItem.createdAt)}</td>
              <td>{timeTag(productItem.updatedAt)}</td>
              <td>{truncate(productItem.shoppingCartId)}</td>
              <td>{truncate(productItem.orderId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.productItem({ id: productItem.id })}
                    title={'Show productItem ' + productItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProductItem({ id: productItem.id })}
                    title={'Edit productItem ' + productItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete productItem ' + productItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(productItem.id)}
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

export default ProductItemsList
