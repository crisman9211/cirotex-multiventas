import EditProductItemCell from 'src/components/ProductItem/EditProductItemCell'

type ProductItemPageProps = {
  id: string
}

const EditProductItemPage = ({ id }: ProductItemPageProps) => {
  return <EditProductItemCell id={id} />
}

export default EditProductItemPage
