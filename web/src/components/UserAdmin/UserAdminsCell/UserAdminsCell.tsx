import type { FindUserAdmins } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserAdmins from 'src/components/UserAdmin/UserAdmins'

export const QUERY = gql`
  query FindUserAdmins {
    userAdmins {
      id
      userId
      role
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userAdmins yet. '}
      <Link
        to={routes.newUserAdmin()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userAdmins }: CellSuccessProps<FindUserAdmins>) => {
  return <UserAdmins userAdmins={userAdmins} />
}
