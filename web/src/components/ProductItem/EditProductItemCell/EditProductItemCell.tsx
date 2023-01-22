import type { EditProductItemById, UpdateProductItemInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductItemForm from 'src/components/ProductItem/ProductItemForm'

export const QUERY = gql`
  query EditProductItemById($id: String!) {
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
const UPDATE_PRODUCT_ITEM_MUTATION = gql`
  mutation UpdateProductItemMutation($id: String!, $input: UpdateProductItemInput!) {
    updateProductItem(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ productItem }: CellSuccessProps<EditProductItemById>) => {
  const [updateProductItem, { loading, error }] = useMutation(
    UPDATE_PRODUCT_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductItem updated')
        navigate(routes.productItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProductItemInput,
    id: EditProductItemById['productItem']['id']
  ) => {
    updateProductItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ProductItem {productItem?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ProductItemForm productItem={productItem} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
