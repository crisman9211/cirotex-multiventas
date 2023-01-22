import ShoppingCartCell from 'src/components/ShoppingCart/ShoppingCartCell'

type ShoppingCartPageProps = {
  id: string
}

const ShoppingCartPage = ({ id }: ShoppingCartPageProps) => {
  return <ShoppingCartCell id={id} />
}

export default ShoppingCartPage
