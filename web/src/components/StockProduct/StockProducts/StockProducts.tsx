import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/StockProduct/StockProductsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteStockProductMutationVariables, FindStockProducts } from 'types/graphql'

const DELETE_STOCK_PRODUCT_MUTATION = gql`
  mutation DeleteStockProductMutation($id: String!) {
    deleteStockProduct(id: $id) {
      id
    }
  }
`

const StockProductsList = ({ stockProducts }: FindStockProducts) => {
  const [deleteStockProduct] = useMutation(DELETE_STOCK_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('StockProduct deleted')
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

  const onDeleteClick = (id: DeleteStockProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stockProduct ' + id + '?')) {
      deleteStockProduct({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Stock id</th>
            <th>Quantity</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Product id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stockProducts.map((stockProduct) => (
            <tr key={stockProduct.id}>
              <td>{truncate(stockProduct.id)}</td>
              <td>{truncate(stockProduct.stockId)}</td>
              <td>{truncate(stockProduct.quantity)}</td>
              <td>{timeTag(stockProduct.createdAt)}</td>
              <td>{timeTag(stockProduct.updatedAt)}</td>
              <td>{truncate(stockProduct.productId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.stockProduct({ id: stockProduct.id })}
                    title={'Show stockProduct ' + stockProduct.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStockProduct({ id: stockProduct.id })}
                    title={'Edit stockProduct ' + stockProduct.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete stockProduct ' + stockProduct.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(stockProduct.id)}
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

export default StockProductsList
