import StockCell from 'src/components/Stock/StockCell'

type StockPageProps = {
  id: string
}

const StockPage = ({ id }: StockPageProps) => {
  return <StockCell id={id} />
}

export default StockPage
