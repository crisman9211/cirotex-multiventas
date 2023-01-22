import type { FindUserClients } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserClients from 'src/components/UserClient/UserClients'

export const QUERY = gql`
  query FindUserClients {
    userClients {
      id
      phoneNumber
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userClients yet. '}
      <Link
        to={routes.newUserClient()}
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

export const Success = ({ userClients }: CellSuccessProps<FindUserClients>) => {
  return <UserClients userClients={userClients} />
}
