import EditStockProductCell from 'src/components/StockProduct/EditStockProductCell'

type StockProductPageProps = {
  id: string
}

const EditStockProductPage = ({ id }: StockProductPageProps) => {
  return <EditStockProductCell id={id} />
}

export default EditStockProductPage
