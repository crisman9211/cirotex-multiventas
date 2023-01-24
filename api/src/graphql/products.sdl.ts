export const schema = gql`
  type Product {
    id: String!
    name: String!
    description: String!
    imgURL: String!
    price: Float!
    isAvailable: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    ProductItem: [ProductItem]!
    StockProduct: StockProduct
  }

  type ListProduct {
    id: String!
    name: String!
    description: String!
    price: Float!
    stock: Int!
    imgURL: String!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: String!): Product @requireAuth
    listProducts: [ListProduct!]! @requireAuth
  }

  input CreateProductInput {
    name: String!
    description: String!
    imgURL: String!
    price: Float!
    isAvailable: Boolean!
  }

  input UpdateProductInput {
    name: String
    description: String
    imgURL: String
    price: Float
    isAvailable: Boolean
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`
