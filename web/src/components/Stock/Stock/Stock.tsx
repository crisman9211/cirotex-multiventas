
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteStockMutationVariables, FindStockById } from 'types/graphql'

const DELETE_STOCK_MUTATION = gql`
  mutation DeleteStockMutation($id: String!) {
    deleteStock(id: $id) {
      id
    }
  }
`

interface Props {
  stock: NonNullable<FindStockById['stock']>
}

const Stock = ({ stock }: Props) => {
  const [deleteStock] = useMutation(DELETE_STOCK_MUTATION, {
    onCompleted: () => {
      toast.success('Stock deleted')
      navigate(routes.stocks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStockMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stock ' + id + '?')) {
      deleteStock({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Stock {stock.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{stock.id}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(stock.createdAt)}</td>
            </tr><tr>
              <th>Description</th>
              <td>{stock.description}</td>
            </tr><tr>
              <th>Slug</th>
              <td>{stock.slug}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStock({ id: stock.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(stock.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Stock
