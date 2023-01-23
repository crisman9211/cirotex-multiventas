import AppBarClient from 'src/components/AppBarClient/AppBarClient'

type ClientLayoutProps = {
  children?: React.ReactNode
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <AppBarClient countProductsSelected={20} />
      {children}
    </>
  )
}

export default ClientLayout
