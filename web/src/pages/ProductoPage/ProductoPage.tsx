import { MetaTags } from '@redwoodjs/web'

import ListProductsCell from 'src/components/ListProductsCell/ListProductsCell'

const ProductoPage = () => {
  return (
    <>
      <MetaTags title="Producto" description="Producto page" />
      <ListProductsCell />
    </>
  )
}

export default ProductoPage
