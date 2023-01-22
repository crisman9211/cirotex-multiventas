import type { FindOrderById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Order from 'src/components/Order/Order'

export const QUERY = gql`
  query FindOrderById($id: String!) {
    order: order(id: $id) {
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

export const Empty = () => <div>Order not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ order }: CellSuccessProps<FindOrderById>) => {
  return <Order order={order} />
}
