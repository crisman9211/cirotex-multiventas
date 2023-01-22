import EditStockCell from 'src/components/Stock/EditStockCell'

type StockPageProps = {
  id: string
}

const EditStockPage = ({ id }: StockPageProps) => {
  return <EditStockCell id={id} />
}

export default EditStockPage
