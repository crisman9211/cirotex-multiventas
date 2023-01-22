import type { FindUserClientById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserClient from 'src/components/UserClient/UserClient'

export const QUERY = gql`
  query FindUserClientById($id: String!) {
    userClient: userClient(id: $id) {
      id
      phoneNumber
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserClient not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ userClient }: CellSuccessProps<FindUserClientById>) => {
  return <UserClient userClient={userClient} />
}
