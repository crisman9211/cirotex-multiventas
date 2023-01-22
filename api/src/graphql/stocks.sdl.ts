export const schema = gql`
  type Stock {
    id: String!
    createdAt: DateTime!
    StockProduct: [StockProduct]!
    description: String!
    slug: String!
  }

  type Query {
    stocks: [Stock!]! @requireAuth
    stock(id: String!): Stock @requireAuth
  }

  input CreateStockInput {
    description: String!
    slug: String!
  }

  input UpdateStockInput {
    description: String
    slug: String
  }

  type Mutation {
    createStock(input: CreateStockInput!): Stock! @requireAuth
    updateStock(id: String!, input: UpdateStockInput!): Stock! @requireAuth
    deleteStock(id: String!): Stock! @requireAuth
  }
`
