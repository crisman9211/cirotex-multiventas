export const schema = gql`
  type ProductItem {
    id: String!
    Product: Product!
    productId: String!
    quantity: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    ShoppingCart: ShoppingCart
    shoppingCartId: String
    Order: Order
    orderId: String
  }

  type Query {
    productItems: [ProductItem!]! @requireAuth
    productItem(id: String!): ProductItem @requireAuth
  }

  input CreateProductItemInput {
    productId: String!
    quantity: Int!
    shoppingCartId: String
    orderId: String
  }

  input UpdateProductItemInput {
    productId: String
    quantity: Int
    shoppingCartId: String
    orderId: String
  }

  type Mutation {
    createProductItem(input: CreateProductItemInput!): ProductItem! @requireAuth
    updateProductItem(
      id: String!
      input: UpdateProductItemInput!
    ): ProductItem! @requireAuth
    deleteProductItem(id: String!): ProductItem! @requireAuth
  }
`
