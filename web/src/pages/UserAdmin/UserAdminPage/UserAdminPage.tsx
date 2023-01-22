import UserAdminCell from 'src/components/UserAdmin/UserAdminCell'

type UserAdminPageProps = {
  id: string
}

const UserAdminPage = ({ id }: UserAdminPageProps) => {
  return <UserAdminCell id={id} />
}

export default UserAdminPage
