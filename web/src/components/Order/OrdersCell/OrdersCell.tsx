import type { FindOrders } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Orders from 'src/components/Order/Orders'

export const QUERY = gql`
  query FindOrders {
    orders {
      id
      userClientId
      createdAt
      updatedAt
      totalPrice
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No orders yet. '}
      <Link
        to={routes.newOrder()}
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

export const Success = ({ orders }: CellSuccessProps<FindOrders>) => {
  return <Orders orders={orders} />
}
