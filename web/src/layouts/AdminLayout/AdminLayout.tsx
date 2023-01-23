import { Box } from '@mui/material'

import { routes } from '@redwoodjs/router'

import AppBarAdmin from 'src/components/AppBarAdmin/AppBarAdmin'
import MenuAdmin from 'src/components/MenuAdmin/MenuAdmin'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const menuRoutes = [
    {
      name: 'StockProducts',
      model: 'StockProduct',
      route: routes.stockProducts(),
    },
    {
      name: 'Stocks',
      model: 'Stock',
      route: routes.stocks(),
    },
    {
      name: 'Orders',
      model: 'Order',
      route: routes.orders(),
    },
    {
      name: 'ShoppingCarts',
      model: 'ShoppingCart',
      route: routes.shoppingCarts(),
    },
    {
      name: 'ProductItems',
      model: 'ProductItem',
      route: routes.productItems(),
    },
    {
      name: 'Products',
      model: 'Product',
      route: routes.products(),
    },
    {
      name: 'UserClients',
      model: 'UserClient',
      route: routes.userClients(),
    },
    {
      name: 'UserAdmins',
      model: 'UserAdmin',
      route: routes.userAdmins(),
    },
    {
      name: 'Users',
      model: 'User',
      route: routes.users(),
    },
  ]
  return (
    // <>
    //   <AppBarAdmin title={'BackOffice'} navItems={[]}>
    //   </AppBarAdmin>
    // </>
    <>
      <AppBarAdmin title={'BackOffice'} menuRoutes={menuRoutes}>
        <Box sx={{ p: '20px', display: 'flex' }}>
          <Box
            sx={{
              minWidth: '250px !important',
              maxWidth: '250px',
              borderRight: '1px solid #ccc',
              marginRight: '15px',
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <MenuAdmin menuRoutes={menuRoutes} />
          </Box>
          <Box
            // on movile devices, the width is 100%
            // on desktop devices, the width is 100% - 250px
            sx={{ width: { xs: '100%', sm: 'calc(100% - 250px)' } }}
          >
            <Box>{children}</Box>
          </Box>
        </Box>
      </AppBarAdmin>
    </>
  )
}

export default AdminLayout
