import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShoppingCartForm from 'src/components/ShoppingCart/ShoppingCartForm'

import type { CreateShoppingCartInput } from 'types/graphql'

const CREATE_SHOPPING_CART_MUTATION = gql`
  mutation CreateShoppingCartMutation($input: CreateShoppingCartInput!) {
    createShoppingCart(input: $input) {
      id
    }
  }
`

const NewShoppingCart = () => {
  const [createShoppingCart, { loading, error }] = useMutation(
    CREATE_SHOPPING_CART_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShoppingCart created')
        navigate(routes.shoppingCarts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateShoppingCartInput) => {
    createShoppingCart({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ShoppingCart</h2>
      </header>
      <div className="rw-segment-main">
        <ShoppingCartForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewShoppingCart
