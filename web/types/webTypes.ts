export interface navItemsInterface {
  name: string
  path: string
}
export interface navItemsProps {
  title: string
  navItems: navItemsInterface[]
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
