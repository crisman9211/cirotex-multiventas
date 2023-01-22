import type { FindShoppingCarts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShoppingCarts from 'src/components/ShoppingCart/ShoppingCarts'

export const QUERY = gql`
  query FindShoppingCarts {
    shoppingCarts {
      id
      userClientId
      isAvailable
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shoppingCarts yet. '}
      <Link
        to={routes.newShoppingCart()}
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

export const Success = ({ shoppingCarts }: CellSuccessProps<FindShoppingCarts>) => {
  return <ShoppingCarts shoppingCarts={shoppingCarts} />
}
