export const schema = gql`
  type ShoppingCart {
    id: String!
    userClient: UserClient!
    userClientId: String!
    ProductItem: [ProductItem]!
    isAvailable: Boolean!
    createdAt: DateTime!
  }

  type Query {
    shoppingCarts: [ShoppingCart!]! @requireAuth
    shoppingCart(id: String!): ShoppingCart @requireAuth
  }

  input CreateShoppingCartInput {
    userClientId: String!
    isAvailable: Boolean!
  }

  input UpdateShoppingCartInput {
    userClientId: String
    isAvailable: Boolean
  }

  type Mutation {
    createShoppingCart(input: CreateShoppingCartInput!): ShoppingCart!
      @requireAuth
    updateShoppingCart(
      id: String!
      input: UpdateShoppingCartInput!
    ): ShoppingCart! @requireAuth
    deleteShoppingCart(id: String!): ShoppingCart! @requireAuth
  }
`
