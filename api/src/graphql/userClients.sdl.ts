export const schema = gql`
  type UserClient {
    id: String!
    phoneNumber: String
    user: User!
    userId: String!
    ShoppingCart: shoppingCart
    Order: [Order]!
  }

  type Query {
    userClients: [UserClient!]! @requireAuth
    userClient(id: String!): UserClient @requireAuth
  }

  input CreateUserClientInput {
    phoneNumber: String
    userId: String!
  }

  input UpdateUserClientInput {
    phoneNumber: String
    userId: String
  }

  type Mutation {
    createUserClient(input: CreateUserClientInput!): UserClient! @requireAuth
    updateUserClient(id: String!, input: UpdateUserClientInput!): UserClient!
      @requireAuth
    deleteUserClient(id: String!): UserClient! @requireAuth
  }
`
