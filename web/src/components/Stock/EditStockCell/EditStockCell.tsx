import type { EditStockById, UpdateStockInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StockForm from 'src/components/Stock/StockForm'

export const QUERY = gql`
  query EditStockById($id: String!) {
    stock: stock(id: $id) {
      id
      createdAt
      description
      slug
    }
  }
`
const UPDATE_STOCK_MUTATION = gql`
  mutation UpdateStockMutation($id: String!, $input: UpdateStockInput!) {
    updateStock(id: $id, input: $input) {
      id
      createdAt
      description
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stock }: CellSuccessProps<EditStockById>) => {
  const [updateStock, { loading, error }] = useMutation(
    UPDATE_STOCK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Stock updated')
        navigate(routes.stocks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStockInput,
    id: EditStockById['stock']['id']
  ) => {
    updateStock({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Stock {stock?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <StockForm stock={stock} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
