import type {
  QueryResolvers,
  MutationResolvers,
  OrderRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const orders: QueryResolvers['orders'] = () => {
  return db.order.findMany()
}

export const order: QueryResolvers['order'] = ({ id }) => {
  return db.order.findUnique({
    where: { id },
  })
}

export const createOrder: MutationResolvers['createOrder'] = ({ input }) => {
  return db.order.create({
    data: input,
  })
}

export const updateOrder: MutationResolvers['updateOrder'] = ({
  id,
  input,
}) => {
  return db.order.update({
    data: input,
    where: { id },
  })
}

export const deleteOrder: MutationResolvers['deleteOrder'] = ({ id }) => {
  return db.order.delete({
    where: { id },
  })
}

export const Order: OrderRelationResolvers = {
  UserClient: (_obj, { root }) => {
    return db.order.findUnique({ where: { id: root?.id } }).UserClient()
  },
  ProductItem: (_obj, { root }) => {
    return db.order.findUnique({ where: { id: root?.id } }).ProductItem()
  },
}
