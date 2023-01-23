import { Description } from '@mui/icons-material'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  listProducts: [
    {
      id: 'asdf42',
      name: 'Camisa T Hombre',
      Description: 'POLO JERSEY UNICOLOR REGULAR FIT PARA HOMBRE 22330',
      price: 49000,
      imgURL:
        'https://arturocalle.vtexassets.com/arquivos/ids/518386-1200-auto?v=638076748218770000&width=1200&height=auto&aspect=true',
      stock: 10,
    },
    {
      id: 'asdf43',
      name: 'Camisa T Mujer',
      Description: 'POLO JERSEY UNICOLOR REGULAR FIT PARA MUJER 22330',
      price: 59000,
      imgURL:
        'https://arturocalle.vtexassets.com/arquivos/ids/516225-1200-auto?v=638068996170730000&width=1200&height=auto&aspect=true',
      stock: 5,
    },
    {
      id: 'asdf44',
      name: 'Zapatos Hombre 43',
      Description: 'ZAPATOS DE CUERO PARA HOMBRE con suela de goma',
      price: 189000,
      imgURL:
        'https://arturocalle.vtexassets.com/arquivos/ids/323428-1200-auto?v=637521145315400000&width=1200&height=auto&aspect=true',
      stock: 2,
    },
    {
      id: 'asdf45',
      name: 'Zapatos Mujer 38',
      Description: 'ZAPATOS DE CUERO PARA MUJER con suela de goma',
      price: 158000,
      imgURL:
        'https://arturocalle.vtexassets.com/arquivos/ids/506774-1200-auto?v=638047329334870000&width=1200&height=auto&aspect=true',
      stock: 0,
    },
  ],
})
