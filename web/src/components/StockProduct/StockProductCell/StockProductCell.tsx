import type { FindStockProductById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StockProduct from 'src/components/StockProduct/StockProduct'

export const QUERY = gql`
  query FindStockProductById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StockProduct not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stockProduct }: CellSuccessProps<FindStockProductById>) => {
  return <StockProduct stockProduct={stockProduct} />
}
