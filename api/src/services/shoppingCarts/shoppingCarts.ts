import type {
  QueryResolvers,
  MutationResolvers,
  ShoppingCartRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const shoppingCarts: QueryResolvers['shoppingCarts'] = () => {
  return db.shoppingCart.findMany()
}

export const shoppingCart: QueryResolvers['shoppingCart'] = ({ id }) => {
  return db.shoppingCart.findUnique({
    where: { id },
  })
}

export const createShoppingCart: MutationResolvers['createShoppingCart'] = ({
  input,
}) => {
  return db.shoppingCart.create({
    data: input,
  })
}

export const updateShoppingCart: MutationResolvers['updateShoppingCart'] = ({
  id,
  input,
}) => {
  return db.shoppingCart.update({
    data: input,
    where: { id },
  })
}

export const deleteShoppingCart: MutationResolvers['deleteShoppingCart'] = ({
  id,
}) => {
  return db.shoppingCart.delete({
    where: { id },
  })
}

export const ShoppingCart: ShoppingCartRelationResolvers = {
  userClient: (_obj, { root }) => {
    return db.shoppingCart.findUnique({ where: { id: root?.id } }).userClient()
  },
  ProductItem: (_obj, { root }) => {
    return db.shoppingCart.findUnique({ where: { id: root?.id } }).ProductItem()
  },
}
