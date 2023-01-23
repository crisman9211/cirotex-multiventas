import { Grid } from '@mui/material'
import type { ListProductsQuery } from 'types/graphql'
import { ProductCardProps } from 'types/webTypes'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductCard from '../ProductCard/ProductCard'

export const QUERY = gql`
  query ListProductsQuery {
    listProducts {
      id
      name
      description
      price
      stock
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  listProducts,
}: CellSuccessProps<ListProductsQuery>) => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listProducts.map((product: ProductCardProps, index: React.Key) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              imgURL={product.imgURL}
              stock={product.stock}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
