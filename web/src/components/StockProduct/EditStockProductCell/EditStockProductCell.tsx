import type { EditStockProductById, UpdateStockProductInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StockProductForm from 'src/components/StockProduct/StockProductForm'

export const QUERY = gql`
  query EditStockProductById($id: String!) {
    stockProduct: stockProduct(id: $id) {
      id
      stockId
      quantity
      createdAt
      updatedAt
      productId
    }
  }
`
const UPDATE_STOCK_PRODUCT_MUTATION = gql`
  mutation UpdateStockProductMutation($id: String!, $input: UpdateStockProductInput!) {
    updateStockProduct(id: $id, input: $input) {
      id
      stockId
      quantity
      createdAt
      updatedAt
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stockProduct }: CellSuccessProps<EditStockProductById>) => {
  const [updateStockProduct, { loading, error }] = useMutation(
    UPDATE_STOCK_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        toast.success('StockProduct updated')
        navigate(routes.stockProducts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStockProductInput,
    id: EditStockProductById['stockProduct']['id']
  ) => {
    updateStockProduct({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit StockProduct {stockProduct?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <StockProductForm stockProduct={stockProduct} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
