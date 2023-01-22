export const schema = gql`
  type UserAdmin {
    id: String!
    user: User!
    userId: String!
    role: Role!
  }

  enum Role {
    ADMIN
  }

  type Query {
    userAdmins: [UserAdmin!]! @requireAuth
    userAdmin(id: String!): UserAdmin @requireAuth
  }

  input CreateUserAdminInput {
    userId: String!
    role: Role!
  }

  input UpdateUserAdminInput {
    userId: String
    role: Role
  }

  type Mutation {
    createUserAdmin(input: CreateUserAdminInput!): UserAdmin! @requireAuth
    updateUserAdmin(id: String!, input: UpdateUserAdminInput!): UserAdmin!
      @requireAuth
    deleteUserAdmin(id: String!): UserAdmin! @requireAuth
  }
`
