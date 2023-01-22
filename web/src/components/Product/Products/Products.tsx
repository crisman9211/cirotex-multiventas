import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Product/ProductsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteProductMutationVariables, FindProducts } from 'types/graphql'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

const ProductsList = ({ products }: FindProducts) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Img url</th>
            <th>Price</th>
            <th>Is available</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{truncate(product.id)}</td>
              <td>{truncate(product.name)}</td>
              <td>{truncate(product.description)}</td>
              <td>{truncate(product.imgURL)}</td>
              <td>{truncate(product.price)}</td>
              <td>{checkboxInputTag(product.isAvailable)}</td>
              <td>{timeTag(product.createdAt)}</td>
              <td>{timeTag(product.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.product({ id: product.id })}
                    title={'Show product ' + product.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProduct({ id: product.id })}
                    title={'Edit product ' + product.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete product ' + product.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(product.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsList
