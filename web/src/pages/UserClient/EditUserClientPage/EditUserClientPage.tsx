import EditUserClientCell from 'src/components/UserClient/EditUserClientCell'

type UserClientPageProps = {
  id: string
}

const EditUserClientPage = ({ id }: UserClientPageProps) => {
  return <EditUserClientCell id={id} />
}

export default EditUserClientPage
