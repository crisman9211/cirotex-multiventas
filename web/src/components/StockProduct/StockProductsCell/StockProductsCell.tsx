import type { FindStockProducts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StockProducts from 'src/components/StockProduct/StockProducts'

export const QUERY = gql`
  query FindStockProducts {
    stockProducts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stockProducts yet. '}
      <Link
        to={routes.newStockProduct()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stockProducts }: CellSuccessProps<FindStockProducts>) => {
  return <StockProducts stockProducts={stockProducts} />
}
