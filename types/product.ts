export type Product = {
  title: string
  price: string
  description: string
  material: string
  image: string
  id: string
}

export type ProductInCart = Product & { count: number }

export type getProductsParams = {
  order?: 'asc' | 'desc'
  sortBy?: string
  material?: string
}
