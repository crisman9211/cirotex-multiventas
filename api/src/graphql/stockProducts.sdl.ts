export const schema = gql`
  type StockProduct {
    id: String!
    Stock: Stock!
    stockId: String!
    quantity: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    Product: Product!
    productId: String!
  }

  type Query {
    stockProducts: [StockProduct!]! @requireAuth
    stockProduct(id: String!): StockProduct @requireAuth
  }

  input CreateStockProductInput {
    stockId: String!
    quantity: Int!
    productId: String!
  }

  input UpdateStockProductInput {
    stockId: String
    quantity: Int
    productId: String
  }

  type Mutation {
    createStockProduct(input: CreateStockProductInput!): StockProduct!
      @requireAuth
    updateStockProduct(
      id: String!
      input: UpdateStockProductInput!
    ): StockProduct! @requireAuth
    deleteStockProduct(id: String!): StockProduct! @requireAuth
  }
`
