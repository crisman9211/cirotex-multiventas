import type { FindShoppingCartById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShoppingCart from 'src/components/ShoppingCart/ShoppingCart'

export const QUERY = gql`
  query FindShoppingCartById($id: String!) {
    shoppingCart: shoppingCart(id: $id) {
      id
      userClientId
      isAvailable
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ShoppingCart not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shoppingCart }: CellSuccessProps<FindShoppingCartById>) => {
  return <ShoppingCart shoppingCart={shoppingCart} />
}
