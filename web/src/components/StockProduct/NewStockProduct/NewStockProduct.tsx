import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StockProductForm from 'src/components/StockProduct/StockProductForm'

import type { CreateStockProductInput } from 'types/graphql'

const CREATE_STOCK_PRODUCT_MUTATION = gql`
  mutation CreateStockProductMutation($input: CreateStockProductInput!) {
    createStockProduct(input: $input) {
      id
    }
  }
`

const NewStockProduct = () => {
  const [createStockProduct, { loading, error }] = useMutation(
    CREATE_STOCK_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        toast.success('StockProduct created')
        navigate(routes.stockProducts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStockProductInput) => {
    createStockProduct({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New StockProduct</h2>
      </header>
      <div className="rw-segment-main">
        <StockProductForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStockProduct
