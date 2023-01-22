import type { FindProductItems } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductItems from 'src/components/ProductItem/ProductItems'

export const QUERY = gql`
  query FindProductItems {
    productItems {
      id
      productId
      quantity
      createdAt
      updatedAt
      shoppingCartId
      orderId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productItems yet. '}
      <Link
        to={routes.newProductItem()}
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

export const Success = ({ productItems }: CellSuccessProps<FindProductItems>) => {
  return <ProductItems productItems={productItems} />
}
