import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Stock/StocksCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteStockMutationVariables, FindStocks } from 'types/graphql'

const DELETE_STOCK_MUTATION = gql`
  mutation DeleteStockMutation($id: String!) {
    deleteStock(id: $id) {
      id
    }
  }
`

const StocksList = ({ stocks }: FindStocks) => {
  const [deleteStock] = useMutation(DELETE_STOCK_MUTATION, {
    onCompleted: () => {
      toast.success('Stock deleted')
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

  const onDeleteClick = (id: DeleteStockMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stock ' + id + '?')) {
      deleteStock({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Description</th>
            <th>Slug</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{truncate(stock.id)}</td>
              <td>{timeTag(stock.createdAt)}</td>
              <td>{truncate(stock.description)}</td>
              <td>{truncate(stock.slug)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.stock({ id: stock.id })}
                    title={'Show stock ' + stock.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStock({ id: stock.id })}
                    title={'Edit stock ' + stock.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete stock ' + stock.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(stock.id)}
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

export default StocksList
