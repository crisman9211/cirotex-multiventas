
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteStockProductMutationVariables, FindStockProductById } from 'types/graphql'

const DELETE_STOCK_PRODUCT_MUTATION = gql`
  mutation DeleteStockProductMutation($id: String!) {
    deleteStockProduct(id: $id) {
      id
    }
  }
`

interface Props {
  stockProduct: NonNullable<FindStockProductById['stockProduct']>
}

const StockProduct = ({ stockProduct }: Props) => {
  const [deleteStockProduct] = useMutation(DELETE_STOCK_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('StockProduct deleted')
      navigate(routes.stockProducts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStockProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stockProduct ' + id + '?')) {
      deleteStockProduct({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            StockProduct {stockProduct.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{stockProduct.id}</td>
            </tr><tr>
              <th>Stock id</th>
              <td>{stockProduct.stockId}</td>
            </tr><tr>
              <th>Quantity</th>
              <td>{stockProduct.quantity}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(stockProduct.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(stockProduct.updatedAt)}</td>
            </tr><tr>
              <th>Product id</th>
              <td>{stockProduct.productId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStockProduct({ id: stockProduct.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(stockProduct.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default StockProduct
