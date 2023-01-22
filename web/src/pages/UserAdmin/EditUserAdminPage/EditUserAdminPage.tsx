import EditUserAdminCell from 'src/components/UserAdmin/EditUserAdminCell'

type UserAdminPageProps = {
  id: string
}

const EditUserAdminPage = ({ id }: UserAdminPageProps) => {
  return <EditUserAdminCell id={id} />
}

export default EditUserAdminPage
