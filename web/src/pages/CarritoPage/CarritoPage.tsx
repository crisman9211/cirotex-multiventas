import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CarritoPage = () => {
  return (
    <>
      <MetaTags title="Carrito" description="Carrito page" />

      <h1>CarritoPage</h1>
      <p>
        Find me in <code>./web/src/pages/CarritoPage/CarritoPage.tsx</code>
      </p>
      <p>
        My default route is named <code>carrito</code>, link to me with `
        <Link to={routes.carrito()}>Carrito</Link>`
      </p>
    </>
  )
}

export default CarritoPage
