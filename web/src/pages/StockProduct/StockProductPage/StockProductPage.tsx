import StockProductCell from 'src/components/StockProduct/StockProductCell'

type StockProductPageProps = {
  id: string
}

const StockProductPage = ({ id }: StockProductPageProps) => {
  return <StockProductCell id={id} />
}

export default StockProductPage
