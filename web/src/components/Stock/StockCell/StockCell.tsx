import type { FindStockById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Stock from 'src/components/Stock/Stock'

export const QUERY = gql`
  query FindStockById($id: String!) {
    stock: stock(id: $id) {
      id
      createdAt
      description
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Stock not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stock }: CellSuccessProps<FindStockById>) => {
  return <Stock stock={stock} />
}
