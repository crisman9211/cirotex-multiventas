import EditProductCell from 'src/components/Product/EditProductCell'

type ProductPageProps = {
  id: string
}

const EditProductPage = ({ id }: ProductPageProps) => {
  return <EditProductCell id={id} />
}

export default EditProductPage
