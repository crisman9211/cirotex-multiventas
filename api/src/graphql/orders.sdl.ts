export const schema = gql`
  type Order {
    id: String!
    UserClient: UserClient!
    userClientId: String!
    ProductItem: [ProductItem]!
    createdAt: DateTime!
    updatedAt: DateTime!
    totalPrice: Float!
    status: OrderStatus!
  }

  enum OrderStatus {
    new
    hold
    shipped
    delivered
    cancelled
    rejected
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: String!): Order @requireAuth
  }

  input CreateOrderInput {
    userClientId: String!
    totalPrice: Float!
    status: OrderStatus!
  }

  input UpdateOrderInput {
    userClientId: String
    totalPrice: Float
    status: OrderStatus
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: String!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: String!): Order! @requireAuth
  }
`
