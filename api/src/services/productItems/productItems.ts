import type {
  QueryResolvers,
  MutationResolvers,
  ProductItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const productItems: QueryResolvers['productItems'] = () => {
  return db.productItem.findMany()
}

export const productItem: QueryResolvers['productItem'] = ({ id }) => {
  return db.productItem.findUnique({
    where: { id },
  })
}

export const createProductItem: MutationResolvers['createProductItem'] = ({
  input,
}) => {
  return db.productItem.create({
    data: input,
  })
}

export const updateProductItem: MutationResolvers['updateProductItem'] = ({
  id,
  input,
}) => {
  return db.productItem.update({
    data: input,
    where: { id },
  })
}

export const deleteProductItem: MutationResolvers['deleteProductItem'] = ({
  id,
}) => {
  return db.productItem.delete({
    where: { id },
  })
}

export const ProductItem: ProductItemRelationResolvers = {
  Product: (_obj, { root }) => {
    return db.productItem.findUnique({ where: { id: root?.id } }).Product()
  },
  ShoppingCart: (_obj, { root }) => {
    return db.productItem.findUnique({ where: { id: root?.id } }).ShoppingCart()
  },
  Order: (_obj, { root }) => {
    return db.productItem.findUnique({ where: { id: root?.id } }).Order()
  },
}
