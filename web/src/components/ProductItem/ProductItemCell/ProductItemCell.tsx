import type { FindProductItemById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductItem from 'src/components/ProductItem/ProductItem'

export const QUERY = gql`
  query FindProductItemById($id: String!) {
    productItem: productItem(id: $id) {
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

export const Empty = () => <div>ProductItem not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ productItem }: CellSuccessProps<FindProductItemById>) => {
  return <ProductItem productItem={productItem} />
}
