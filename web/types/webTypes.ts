export interface MenuRoutes {
  name: string
  model: string
  route: string
}
export interface MenuAdminProps {
  menuRoutes: MenuRoutes[]
}

export interface navItemsProps {
  title: string
  menuRoutes: MenuRoutes[]
  color?: string
}
export interface AppBarProps extends navItemsProps {
  children: React.ReactNode
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

export interface AppBarClientProps {
  countProductsSelected: number
}
