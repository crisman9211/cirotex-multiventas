export const schema = gql`
  type User {
    id: String!
    uid: String!
    email: String!
    name: String!
    phoneNumber: String
    address: String
    UserClient: UserClient
    UserAdmin: UserAdmin
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    uid: String!
    email: String!
    name: String!
    phoneNumber: String
    address: String
  }

  input UpdateUserInput {
    uid: String
    email: String
    name: String
    phoneNumber: String
    address: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
