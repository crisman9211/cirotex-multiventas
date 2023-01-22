import type {
  QueryResolvers,
  MutationResolvers,
  UserAdminRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userAdmins: QueryResolvers['userAdmins'] = () => {
  return db.userAdmin.findMany()
}

export const userAdmin: QueryResolvers['userAdmin'] = ({ id }) => {
  return db.userAdmin.findUnique({
    where: { id },
  })
}

export const createUserAdmin: MutationResolvers['createUserAdmin'] = ({
  input,
}) => {
  return db.userAdmin.create({
    data: input,
  })
}

export const updateUserAdmin: MutationResolvers['updateUserAdmin'] = ({
  id,
  input,
}) => {
  return db.userAdmin.update({
    data: input,
    where: { id },
  })
}

export const deleteUserAdmin: MutationResolvers['deleteUserAdmin'] = ({
  id,
}) => {
  return db.userAdmin.delete({
    where: { id },
  })
}

export const UserAdmin: UserAdminRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userAdmin.findUnique({ where: { id: root?.id } }).user()
  },
}
