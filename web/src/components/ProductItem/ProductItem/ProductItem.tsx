
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteProductItemMutationVariables, FindProductItemById } from 'types/graphql'

const DELETE_PRODUCT_ITEM_MUTATION = gql`
  mutation DeleteProductItemMutation($id: String!) {
    deleteProductItem(id: $id) {
      id
    }
  }
`

interface Props {
  productItem: NonNullable<FindProductItemById['productItem']>
}

const ProductItem = ({ productItem }: Props) => {
  const [deleteProductItem] = useMutation(DELETE_PRODUCT_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('ProductItem deleted')
      navigate(routes.productItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProductItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete productItem ' + id + '?')) {
      deleteProductItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProductItem {productItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productItem.id}</td>
            </tr><tr>
              <th>Product id</th>
              <td>{productItem.productId}</td>
            </tr><tr>
              <th>Quantity</th>
              <td>{productItem.quantity}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(productItem.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(productItem.updatedAt)}</td>
            </tr><tr>
              <th>Shopping cart id</th>
              <td>{productItem.shoppingCartId}</td>
            </tr><tr>
              <th>Order id</th>
              <td>{productItem.orderId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductItem({ id: productItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProductItem
