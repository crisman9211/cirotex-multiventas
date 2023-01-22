import type { FindUserAdminById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserAdmin from 'src/components/UserAdmin/UserAdmin'

export const QUERY = gql`
  query FindUserAdminById($id: String!) {
    userAdmin: userAdmin(id: $id) {
      id
      userId
      role
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserAdmin not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userAdmin }: CellSuccessProps<FindUserAdminById>) => {
  return <UserAdmin userAdmin={userAdmin} />
}
