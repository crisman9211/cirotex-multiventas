import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { navItemsProps } from 'types/webTypes'

import { NavLink, routes } from '@redwoodjs/router'

const MobileMenu = (props: navItemsProps) => {
  const { title, menuRoutes: navItems } = props
  return (
    <>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink to={item.route} activeClassName="activeLink">
                {item.name}
              </NavLink>{' '}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default MobileMenu
