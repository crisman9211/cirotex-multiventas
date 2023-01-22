import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductItemForm from 'src/components/ProductItem/ProductItemForm'

import type { CreateProductItemInput } from 'types/graphql'

const CREATE_PRODUCT_ITEM_MUTATION = gql`
  mutation CreateProductItemMutation($input: CreateProductItemInput!) {
    createProductItem(input: $input) {
      id
    }
  }
`

const NewProductItem = () => {
  const [createProductItem, { loading, error }] = useMutation(
    CREATE_PRODUCT_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductItem created')
        navigate(routes.productItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateProductItemInput) => {
    createProductItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProductItem</h2>
      </header>
      <div className="rw-segment-main">
        <ProductItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProductItem
