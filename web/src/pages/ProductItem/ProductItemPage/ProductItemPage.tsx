import ProductItemCell from 'src/components/ProductItem/ProductItemCell'

type ProductItemPageProps = {
  id: string
}

const ProductItemPage = ({ id }: ProductItemPageProps) => {
  return <ProductItemCell id={id} />
}

export default ProductItemPage
