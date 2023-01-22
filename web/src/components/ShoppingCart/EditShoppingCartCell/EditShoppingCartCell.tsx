import type { EditShoppingCartById, UpdateShoppingCartInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShoppingCartForm from 'src/components/ShoppingCart/ShoppingCartForm'

export const QUERY = gql`
  query EditShoppingCartById($id: String!) {
    shoppingCart: shoppingCart(id: $id) {
      id
      userClientId
      isAvailable
      createdAt
    }
  }
`
const UPDATE_SHOPPING_CART_MUTATION = gql`
  mutation UpdateShoppingCartMutation($id: String!, $input: UpdateShoppingCartInput!) {
    updateShoppingCart(id: $id, input: $input) {
      id
      userClientId
      isAvailable
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shoppingCart }: CellSuccessProps<EditShoppingCartById>) => {
  const [updateShoppingCart, { loading, error }] = useMutation(
    UPDATE_SHOPPING_CART_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShoppingCart updated')
        navigate(routes.shoppingCarts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateShoppingCartInput,
    id: EditShoppingCartById['shoppingCart']['id']
  ) => {
    updateShoppingCart({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ShoppingCart {shoppingCart?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ShoppingCartForm shoppingCart={shoppingCart} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
