import { Box } from '@mui/material'

import AppBarAdmin from 'src/components/AppBarAdmin/AppBarAdmin'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <AppBarAdmin title={'BackOffice'} navItems={[]}>
        <Box>{children}</Box>
      </AppBarAdmin>
    </>
  )
}

export default AdminLayout
