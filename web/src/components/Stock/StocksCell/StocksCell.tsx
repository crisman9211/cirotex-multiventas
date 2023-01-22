import type { FindStocks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Stocks from 'src/components/Stock/Stocks'

export const QUERY = gql`
  query FindStocks {
    stocks {
      id
      createdAt
      description
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stocks yet. '}
      <Link
        to={routes.newStock()}
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

export const Success = ({ stocks }: CellSuccessProps<FindStocks>) => {
  return <Stocks stocks={stocks} />
}
