import type {
  QueryResolvers,
  MutationResolvers,
  StockRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const stocks: QueryResolvers['stocks'] = () => {
  return db.stock.findMany()
}

export const stock: QueryResolvers['stock'] = ({ id }) => {
  return db.stock.findUnique({
    where: { id },
  })
}

export const createStock: MutationResolvers['createStock'] = ({ input }) => {
  return db.stock.create({
    data: input,
  })
}

export const updateStock: MutationResolvers['updateStock'] = ({
  id,
  input,
}) => {
  return db.stock.update({
    data: input,
    where: { id },
  })
}

export const deleteStock: MutationResolvers['deleteStock'] = ({ id }) => {
  return db.stock.delete({
    where: { id },
  })
}

export const Stock: StockRelationResolvers = {
  StockProduct: (_obj, { root }) => {
    return db.stock.findUnique({ where: { id: root?.id } }).StockProduct()
  },
}
