import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProductoPage = () => {
  return (
    <>
      <MetaTags title="Producto" description="Producto page" />

      <h1>ProductoPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProductoPage/ProductoPage.tsx</code>
      </p>
      <p>
        My default route is named <code>producto</code>, link to me with `
        <Link to={routes.producto()}>Producto</Link>`
      </p>
    </>
  )
}

export default ProductoPage
