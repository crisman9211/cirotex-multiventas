import type {
  QueryResolvers,
  MutationResolvers,
  StockProductRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const stockProducts: QueryResolvers['stockProducts'] = () => {
  return db.stockProduct.findMany()
}

export const stockProduct: QueryResolvers['stockProduct'] = ({ id }) => {
  return db.stockProduct.findUnique({
    where: { id },
  })
}

export const createStockProduct: MutationResolvers['createStockProduct'] = ({
  input,
}) => {
  return db.stockProduct.create({
    data: input,
  })
}

export const updateStockProduct: MutationResolvers['updateStockProduct'] = ({
  id,
  input,
}) => {
  return db.stockProduct.update({
    data: input,
    where: { id },
  })
}

export const deleteStockProduct: MutationResolvers['deleteStockProduct'] = ({
  id,
}) => {
  return db.stockProduct.delete({
    where: { id },
  })
}

export const StockProduct: StockProductRelationResolvers = {
  Stock: (_obj, { root }) => {
    return db.stockProduct.findUnique({ where: { id: root?.id } }).Stock()
  },
  Product: (_obj, { root }) => {
    return db.stockProduct.findUnique({ where: { id: root?.id } }).Product()
  },
}
