import ProductCell from 'src/components/Product/ProductCell'

type ProductPageProps = {
  id: string
}

const ProductPage = ({ id }: ProductPageProps) => {
  return <ProductCell id={id} />
}

export default ProductPage
