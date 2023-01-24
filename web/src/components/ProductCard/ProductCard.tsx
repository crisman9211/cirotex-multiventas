import { Card, CardMedia, CardContent, CardActions } from '@mui/material'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ProductCardProps } from 'types/webTypes'

const ProductCard = ({
  name,
  price,
  description,
  imgURL,
  stock,
}: ProductCardProps) => {
  const dollarUSLocale = Intl.NumberFormat('en-US')
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={imgURL} title="Product Img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Grid container alignItems="initial" sx={{ mt: 4 }}>
            <Grid item xs>
              <Chip
                variant="outlined"
                color={stock > 0 ? 'success' : 'error'}
                label={stock > 0 ? 'In stock' : 'Out of stock'}
              />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {`$ ${dollarUSLocale.format(price)}`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" disabled={stock === 0}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
