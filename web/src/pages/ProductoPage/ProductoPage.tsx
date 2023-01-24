import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import ListProductsCell from 'src/components/ListProductsCell/ListProductsCell'

const ProductoPage = () => {
  return (
    <>
      <MetaTags title="Producto" description="Producto page" />
      <Box
        sx={{
          p: 2,
          m: 4,
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            HOME
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Products
          </Link>
        </Breadcrumbs>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.paper',
            gap: 8,
            mt: 8,
          }}
        >
          <ListProductsCell />
        </Box>
      </Box>
    </>
  )
}

export default ProductoPage
