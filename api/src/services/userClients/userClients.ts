import type {
  QueryResolvers,
  MutationResolvers,
  UserClientRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userClients: QueryResolvers['userClients'] = () => {
  return db.userClient.findMany()
}

export const userClient: QueryResolvers['userClient'] = ({ id }) => {
  return db.userClient.findUnique({
    where: { id },
  })
}

export const createUserClient: MutationResolvers['createUserClient'] = ({
  input,
}) => {
  return db.userClient.create({
    data: input,
  })
}

export const updateUserClient: MutationResolvers['updateUserClient'] = ({
  id,
  input,
}) => {
  return db.userClient.update({
    data: input,
    where: { id },
  })
}

export const deleteUserClient: MutationResolvers['deleteUserClient'] = ({
  id,
}) => {
  return db.userClient.delete({
    where: { id },
  })
}

export const UserClient: UserClientRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userClient.findUnique({ where: { id: root?.id } }).user()
  },
  ShoppingCart: (_obj, { root }) => {
    return db.userClient.findUnique({ where: { id: root?.id } }).ShoppingCart()
  },
  Order: (_obj, { root }) => {
    return db.userClient.findUnique({ where: { id: root?.id } }).Order()
  },
}
