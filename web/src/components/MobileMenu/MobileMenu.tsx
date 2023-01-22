import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { navItemsProps } from 'types/webTypes'

const MobileMenu = (props: navItemsProps) => {
  const { title, navItems } = props
  const nameItems = navItems.map((item) => item.name)
  return (
    <>
      <Typography variant="h6" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider />
      <List>
        {nameItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default MobileMenu
