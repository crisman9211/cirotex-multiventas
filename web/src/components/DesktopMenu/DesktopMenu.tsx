import { Typography, Box, Button } from '@mui/material'
import { navItemsProps } from 'types/webTypes'

const DesktopMenu = (props: navItemsProps) => {
  const { title, navItems, color } = props
  const nameItems = navItems.map((item) => item.name)
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 6, display: { xs: 'none', sm: 'block' } }}
      >
        {title}
      </Typography>
      <Box sx={{ marginRight: 2, display: { xs: 'none', sm: 'block' } }}>
        {nameItems.map((item) => (
          <Button key={item} sx={{ color: `${color ?? '#fff'}` }}>
            {item}
          </Button>
        ))}
      </Box>
    </>
  )
}

export default DesktopMenu
