import type { FindProductById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Product from 'src/components/Product/Product'

export const QUERY = gql`
  query FindProductById($id: String!) {
    product: product(id: $id) {
      id
      name
      description
      imgURL
      price
      isAvailable
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Product not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ product }: CellSuccessProps<FindProductById>) => {
  return <Product product={product} />
}
