import type {
  QueryResolvers,
  MutationResolvers,
  ProductRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { stockProduct } from '../stockProducts/stockProducts'
import { stock } from '../stocks/stocks'

export const products: QueryResolvers['products'] = () => {
  return db.product.findMany()
}

export const product: QueryResolvers['product'] = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  })
}

export const createProduct: MutationResolvers['createProduct'] = ({
  input,
}) => {
  return db.product.create({
    data: input,
  })
}

export const updateProduct: MutationResolvers['updateProduct'] = ({
  id,
  input,
}) => {
  return db.product.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct: MutationResolvers['deleteProduct'] = ({ id }) => {
  return db.product.delete({
    where: { id },
  })
}

export const listProducts: QueryResolvers['ListProducts'] = async () => {
  const stockProduct = await db.stockProduct.findMany({
    include: {
      Product: true,
    },
  })
  const listProducts = stockProduct.map((stockProduct) => {
    return {
      id: stockProduct.Product.id,
      name: stockProduct.Product.name,
      description: stockProduct.Product.description,
      price: stockProduct.Product.price,
      stock: stockProduct.quantity,
      imgURL: stockProduct.Product.imgURL,
    }
  })
  return listProducts
}

export const Product: ProductRelationResolvers = {
  ProductItem: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).ProductItem()
  },
  StockProduct: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).StockProduct()
  },
}
