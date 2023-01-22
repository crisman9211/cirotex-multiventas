import EditShoppingCartCell from 'src/components/ShoppingCart/EditShoppingCartCell'

type ShoppingCartPageProps = {
  id: string
}

const EditShoppingCartPage = ({ id }: ShoppingCartPageProps) => {
  return <EditShoppingCartCell id={id} />
}

export default EditShoppingCartPage
