import UserClientCell from 'src/components/UserClient/UserClientCell'

type UserClientPageProps = {
  id: string
}

const UserClientPage = ({ id }: UserClientPageProps) => {
  return <UserClientCell id={id} />
}

export default UserClientPage
