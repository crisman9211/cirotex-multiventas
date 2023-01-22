import OrderCell from 'src/components/Order/OrderCell'

type OrderPageProps = {
  id: string
}

const OrderPage = ({ id }: OrderPageProps) => {
  return <OrderCell id={id} />
}

export default OrderPage
