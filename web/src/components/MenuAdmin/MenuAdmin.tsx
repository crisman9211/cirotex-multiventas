import { Grid, Box } from '@mui/material'
import { MenuAdminProps } from 'types/webTypes'

import { NavLink, routes } from '@redwoodjs/router'

const MenuAdmin = ({ menuRoutes }: MenuAdminProps) => {
  const styles = {
    pl: '10px',
    '& .activeLink': {
      fontWeight: '700',
      borderLeft: '2px solid #000',
      paddingLeft: '10px',
      transition: '.5s all ease',
    },
  }

  // const menuRoutes = [
  //   {
  //     name: 'StockProducts',
  //     model: 'StockProduct',
  //     route: routes.stockProducts(),
  //   },
  //   {
  //     name: 'Stocks',
  //     model: 'Stock',
  //     route: routes.stocks(),
  //   },
  //   {
  //     name: 'Orders',
  //     model: 'Order',
  //     route: routes.orders(),
  //   },
  //   {
  //     name: 'ShoppingCarts',
  //     model: 'ShoppingCart',
  //     route: routes.shoppingCarts(),
  //   },
  //   {
  //     name: 'ProductItems',
  //     model: 'ProductItem',
  //     route: routes.productItems(),
  //   },
  //   {
  //     name: 'Products',
  //     model: 'Product',
  //     route: routes.products(),
  //   },
  //   {
  //     name: 'UserClients',
  //     model: 'UserClient',
  //     route: routes.userClients(),
  //   },
  //   {
  //     name: 'UserAdmins',
  //     model: 'UserAdmin',
  //     route: routes.userAdmins(),
  //   },
  //   {
  //     name: 'Users',
  //     model: 'User',
  //     route: routes.users(),
  //   },
  // ]
  const sortMenu = () => {
    menuRoutes.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
  }
  return (
    <Grid container sx={styles}>
      <Box sx={{ my: '20px' }}>
        <img
          src="https://cirotex.com/wp-content/uploads/2020/06/logo-1.png"
          alt="Cirotex App"
          width="160px"
        />
      </Box>
      <Box>
        {sortMenu()}
        {menuRoutes.map((link) => {
          return (
            <Grid
              key={link.model}
              item
              xs={12}
              sx={{
                py: '10px',
              }}
            >
              <NavLink to={link.route} activeClassName="activeLink">
                {link.name}
              </NavLink>
            </Grid>
          )
        })}
      </Box>
    </Grid>
  )
}

export default MenuAdmin
